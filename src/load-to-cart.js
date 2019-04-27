(async function() {
  console.log(await new Promise(res => res("Hello, world!")));
})();

$(async function() {
  const params = window.location.hash
    .toString()
    .replace("#", "")
    .split(",")
    .map(x => x.split(":"))
    .map(x => {
      return { id: x[0], quantity: x[1] ? parseInt(x[1]) : 1 };
    });
  try {
    await $.ajax({ url: "/cart/clear.js", dataType: "json" }).promise();
    for (const data of params)
      await $.ajax({ url: "/cart/add.js", data, dataType: "json" }).promise();
    window.location.href = "/cart";
  } catch (e) {
    console.log("error", e);
  }
});
