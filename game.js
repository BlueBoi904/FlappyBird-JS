const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;
// LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "img/sprite.png";

function draw() {}
//Need to clear the canvas each time we update the game
ctx.fillStyle = "#70c5ce";
ctx.fillRect(0, 0, cvs.clientWidth, cvs.height);
function loop() {
  update();
  draw();
  frames++;

  requestAnimationFrame(loop);
}
loop();
