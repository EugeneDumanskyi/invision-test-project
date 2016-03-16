# Test project for InvisionApp

## Services

**Producer:** \<PROJECT'S ROOT\>/producer.js

**Consumer:** \<PROJECT'S ROOT\>/consumer.js

## How to run

Install all dependencies:

``` bash
$ npm install
```

Consumer is http server that listen 1337 port and should be run only once:

``` bash
$ npm run-script consumer
```

Producer is a console application.

You can run as many instances as you want.

*Each Producer should be run in separate console:

``` bash
$ npm run-script producer
```

## Unit tests

To run unit tests:

``` bash
$ npm test
```

