This module is an update of [Edo78/ADC0832](https://github.com/Edo78/ADC0832) using the latest RPIO library.
It also allows usage of both channel contrarily to the original library.

# adc0832
The adc0832 is an Integrated Circuit (IC) that performs analog to digital conversion of two channels: 0 and 1.  This module
provides an encapsulation of those capabilities for the Raspberry Pi environment.

## Install
To install this module you can use npm
```
npm install dclause/adc0832
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
The 3 parameters are the numbers of the gpio pins linked to the IC.


To retrieve a value from the IC, we can call
```
adc0832.getValue(channel)
```
with channel being either 0 or 1.
Since the adc0832 is an 8 bit adc coonverter, the value returned will be between 0 and 255.`
