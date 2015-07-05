var Gpio = require('onoff').Gpio;

var  iv;
var drive = {
  led: new Gpio(14, 'out'),
  left: new Gpio(15, 'out'),
  right: new Gpio(18, 'out'),
  forward: new Gpio(23, 'out'),
  back: new Gpio(24, 'out')
}

var params = process.argv[2];
console.log(params);
drive[params].writeSync(1);
