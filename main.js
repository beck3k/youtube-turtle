const YouTube = require('youtube-live-chat');
var turtle = new TURTLE('canvas');

const yt = new YouTube();

function doTurtle(msg) {
  eval("turtle." + msg);
}

yt.on('ready', () => {
  console.log('ready!');
  doTurtle('moveTo(10,244)')
  doTurtle('forward(100)');
  doTurtle('stroke()');
  eval('console.log("test")');
  yt.listen(1000)
})

yt.on('chat', data => {
  console.log(data.snippet.displayMessage);
  var msg = data.snippet.displayMessage;
  if(msg.charAt(0) == "!"){
    var cmd = msg.substr(1,msg.length);
    console.log("Command>" + cmd);
    doTurtle(cmd);
  }
})

yt.on('error', error => {
  console.error(error)
})
