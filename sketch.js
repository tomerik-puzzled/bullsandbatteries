  // Load the background image
  const backgroundImage = new Image();
  backgroundImage.src = 'assets/images/pamela.jpeg';

  // Draw the background image on the canvas
  backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  };


function setup() {
    let render = createCanvas(300, 400);
    render.parent("canvas");
    const backgroundImage = new Image();
    backgroundImage.src = 'assets/images/pamela.jpeg';
    background(184, 235, 200);


}

function draw() {
    if (mouseIsPressed) {
        erase();
        ellipse(mouseX, mouseY, 40, 40);
        noErase();
    }

    if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseX < 100) {
        cursor('cell');
    }

}
