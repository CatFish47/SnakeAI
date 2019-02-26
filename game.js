function init() {
  

  window.requestAnimationFrame(animate);
}

function draw() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);

  return 0;
}

function update() {
  updateEnemies();
}

function animate() {
  update();

  if (draw() == 0) {
    window.requestAnimationFrame(animate);
  }
}

init();
