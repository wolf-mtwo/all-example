var net = require('net')
 
var sock = net.connect(1337)
 
process.stdin.pipe(sock)
sock.pipe(process.stdout)
 
sock.on('connect', function () {
  process.stdin.resume();
  process.stdin.setRawMode(true)
})
 

