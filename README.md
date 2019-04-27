Expects Shopify Theme Kit installed. Expects environment variables `PASSWORD`, `THEME_ID` and `STORE`.

### How to use .env file

```sh
# ./.env
PASSWORD=123
STORE=123
THEME_ID=123
```

```sh
$ # to deploy
$ env $(cat .env | xargs) gulp
gulp output...
$ # to watch (runs themekit watch as well)
$ env $(cat .env | xargs) gulp watch
gulp output...
```