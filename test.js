'use strict';

var rpio = require('rpio');
var adc0832 = require('adc0832');

adc0832.init(19, 26, 24);

setInterval(function() {
  console.log("Value: " + adc0832.getValue());
}, 1000);
