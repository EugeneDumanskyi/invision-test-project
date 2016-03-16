"use strict";

var expect = require('expect.js'),
    gen = require('../lib/generator'),
    ev = require('../lib/evaluator');

describe('Generator', function() {
    it('should generate a positive random integer', function(done) {
        expect(gen.Generator.getRandomInt(1,9)).to.be.a('number');
        done();
    });
    it('should generate an expression with at least 2 numbers', function(done) {
        var generator = new gen.Generator();
        var expression = generator.generate();
        expect(expression.split('+').length).to.be.greaterThan(1);
        done();
    });
    it('should generate an expression that ends with equal sign', function(done) {
        var generator = new gen.Generator();
        var expression = generator.generate();
        expect(expression.indexOf('=', expression.length - 1) !== -1).to.be(true);
        done();
    });
});

describe('Evaluator', function() {
    it('should parse an expression', function (done) {
        expect(ev.Evaluator.parseExpression('1+2=')).to.eql(['1', '2']);
        done();
    });
    it('should parse an expression and return an empty array if the expression is invalid', function (done) {
        expect(ev.Evaluator.parseExpression('')).to.be.empty();
        expect(ev.Evaluator.parseExpression('1-2=')).to.be.empty();
        expect(ev.Evaluator.parseExpression('3')).to.be.empty();
        expect(ev.Evaluator.parseExpression('4+')).to.be.empty();
        expect(ev.Evaluator.parseExpression('1+2')).to.be.empty();
        done();
    });
    it('should calculate an expression', function (done) {
        expect(ev.Evaluator.calculate('1+2=')).to.be(3);
        expect(ev.Evaluator.calculate('1+2+3+4=')).to.be(10);
        done();
    });
    it('should return null instead of sum if an expression is invalid', function (done) {
        expect(ev.Evaluator.calculate('1+b+c+7=')).to.be(null);
        done();
    });
});
