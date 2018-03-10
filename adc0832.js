/**
 * adc0832 module
 */
'use strict';

let rpio = require('rpio');

let CLK = false;
let DIO = false;
let CS  = false;

module.exports.init = function(clk, dio, cs) {
    CLK = clk;
    DIO = dio;
    CS = cs;
};

module.exports.getValue = function() {
    rpio.open(CLK, rpio.OUTPUT);
    rpio.open(DIO, rpio.OUTPUT);
    rpio.open(CS, rpio.OUTPUT);

    rpio.write(CLK, rpio.LOW);
    rpio.write(CS, rpio.LOW);

    rpio.write(DIO, rpio.HIGH); // Start bit
    rpio.msleep(10);
    rpio.write(CLK, rpio.HIGH);
    rpio.msleep(10);
    rpio.write(CLK, rpio.LOW);
    rpio.msleep(10);

    rpio.write(DIO, rpio.HIGH); // SGL
    rpio.write(CLK, rpio.HIGH);
    rpio.msleep(10);
    rpio.write(CLK, rpio.LOW);
    rpio.msleep(10);

    rpio.write(DIO, rpio.LOW); // Choose channel 0
    rpio.write(CLK, rpio.HIGH);
    rpio.msleep(10);
    rpio.open(DIO, rpio.INPUT);
    rpio.write(CLK, rpio.LOW);
    rpio.msleep(10);

    rpio.write(CLK, rpio.HIGH); // Skip a clock
    rpio.msleep(10);
    rpio.write(CLK, rpio.LOW);
    rpio.msleep(10);

    let value = 0;
    for (let i=0; i<8; i++) {
        rpio.write(CLK, rpio.HIGH);
        let bit = rpio.read(DIO);
        value = (value << 1) | bit;
        rpio.msleep(10);
        rpio.write(CLK, rpio.LOW);
        rpio.msleep(10);
    }

    rpio.write(CS, rpio.HIGH);
    return value;
}; // End of getValue()
