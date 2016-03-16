"use strict";

class Evaluator {
    constructor() {
    }

    static parseExpression(expression) {
        if(expression === '' || expression.indexOf('+') === -1 || expression.indexOf('=', expression.length - 1) === -1) {
            return [];
        }
        let expArray = expression.replace('=', '').split('+');
        return expArray.length > 1 ? expArray : [];
    }

    static calculate(expression) {
        let parsedExpression = Evaluator.parseExpression(expression);
        if(parsedExpression.length > 1) {
            let error = false;
            let sum = 0;
            parsedExpression.forEach((item) => {
                error = isNaN(item) ? true : error;
                sum += parseInt(item);
            });
            return !error ? sum : null;
        }
        return null;
    }
}

module.exports.Evaluator = Evaluator;
