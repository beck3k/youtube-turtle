const YouTube = require('youtube-live-chat');
var turtle = new TURTLE('canvas');

const yt = new YouTube();

yt.on('ready', () => {
  console.log('ready!')
  turtle.stroke();
  turtle.forward(10);
  yt.listen(1000)
})

yt.on('chat', data => {
  console.log(data.snippet.displayMessage)
})

yt.on('error', error => {
  console.error(error)
})
