"use strict";

const rp = require('request-promise');
const generator = new (require('./lib/generator').Generator)();
const hostname = '127.0.0.1';
const port = 1337;
const delay = 1000;

const interval = setInterval(() => {
    let expression = generator.generate();
    console.log('Expression = %s', expression);
    let options = {
        uri: `http://${hostname}:${port}/api/expression/${expression}`,
        json: true
    };
    rp(options)
        .then(function (data) {
            console.log('Response: status = %s, msg = %s', data.status, data.msg);
        })
        .catch(function (err) {
            console.error('API call failed.', err);
        });
}, delay);
