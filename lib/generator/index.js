"use strict";

class Generator {
    constructor(config) {
        let cfg = config || {};
        this.MAX_ADD_SUPPORT  = cfg.MAX_ADD_SUPPORT  || 9;
        this.MAX_RAND_INTEGER = cfg.MAX_RAND_INTEGER || 99;
    }

    static getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generate() {
        let opsCount = Generator.getRandomInt(1, this.MAX_ADD_SUPPORT) + 1;
        let expressions = [];
        for(let i = 0; i < opsCount; i++) {
            expressions.push(Generator.getRandomInt(1, this.MAX_RAND_INTEGER));
        }
        return expressions.join('+') + '=';
    }
}

module.exports.Generator = Generator;
