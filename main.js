const YouTube = require('youtube-live-chat');
var turtle = new Turtle('canvas');

const yt = new YouTube('UCQ23UDZHTpH2K71yvIYHENQ', 'AIzaSyB7peh8fzFNcd4GOGaOduvZ31zlmu_v8Lc');

yt.on('ready', () => {
  console.log('ready!')
  turtle.forward(10);
  turtle.stroke();
  yt.listen(1000)
})

yt.on('chat', data => {
  console.log(data.snippet.displayMessage)
})

yt.on('error', error => {
  console.error(error)
})
