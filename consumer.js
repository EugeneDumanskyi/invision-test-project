"use strict";

const http = require('http');
const evaluator = require('./lib/evaluator');

const hostname = '127.0.0.1';
const port = 1337;
const route = '/api/expression/';

http.createServer((req, res) => {
    //console.log(req.url);
    // process 'expression' route only
    if(req.url.indexOf(route) === 0) {
        // get an expression
        let expression = req.url.replace(route, '').trim();
        console.log('Expression = %s', expression);
        // parse & calculate the expression
        let result = evaluator.Evaluator.calculate(expression);
        let resultStr = JSON.stringify({status: result ? 'success' : 'error', msg: result || 'Invalid expression'});
        console.log('Result sent: %s', resultStr);
        res.writeHead(result ? 200 : 400, { 'Content-Type': 'application/json' });
        res.end(resultStr);
    }
    else {
        let resultStr = JSON.stringify({status: 'error', msg: 'Invalid route'});
        console.log('Result sent: %s', resultStr);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(resultStr);
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
