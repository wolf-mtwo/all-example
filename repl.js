var repl = require('repl')
var net = require('net')
 
var wolf = function(m){
 console.log(m);
}
net.createServer(function (socket) {
  var r = repl.start({
      prompt: 'socket '+socket.remoteAddress+':'+socket.remotePort+'> '
    , input: socket
    , output: socket
    , terminal: true
    , useGlobal: false
  })
  r.on('exit', function () {
    socket.end()
  })
  r.context.socket = socket
  r.context.wolf = wolf

}).listen(1337)
