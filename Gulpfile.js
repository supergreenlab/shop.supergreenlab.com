const { src, dest, parallel, series, watch, lastRun } = require("gulp");
const babel = require("gulp-babel");
const spawn = require("child_process").spawn;

function static_scripts() {
  return src(["src/**/*.js"])
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(dest("assets"));
}

function mkspawn(cmd) {
  cmd = cmd.split(" ");
  return function(cb) {
    spawn(cmd.shift(), cmd, { stdio: "inherit" }).on("close", cb);
  };
}

const theme_deploy = mkspawn("theme deploy --env=production");
const theme_watch = mkspawn("theme watch --env=production");

exports.build = parallel([static_scripts]);
exports.default = series(exports.build, theme_deploy);
exports.deploy = theme_deploy;

exports.watch = series(
  exports.build,
  exports.deploy,
  parallel(() => {
    watch("src/**/*.js", static_scripts);
  }, theme_watch)
);
