This module is a just a rewrite, based on [rpio](https://github.com/jperkin/node-rpio), of https://github.com/nkolban/nodejs-adc0832 (which is based on wiringPi)

# adc0832
The adc0832 is an Integrated Circuit (IC) that performs analog to digital conversion.  This module
provides an encapsulation of those capabilities for the Raspberry Pi environment.

## Install
To install this module you can use npm
```
npm install -S adc0832
```

## Usage
In order to use the module, we must require `adc0832`.  For example:
```
var adc0832 = require("adc0832");
```
We must also initialize the module by explicitly calling init:
```
adc0832.init(clk, dio, cs);
```
To retrieve a value from the IC, we can call
```
adc0832.getValue(clk, dio, cs)
```
The 3 parameters are the numbers of the gpio pins linked to the IC.
Since the adc0832 is an 8 bit adc coonverter, the value returned will be between 0 and 255.`
