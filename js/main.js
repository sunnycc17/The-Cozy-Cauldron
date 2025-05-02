const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load your adorable placeholder mushroom
const mushroom = loadImage("assets/images/tiles/mushroom.png");

// Set up game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background (light green meadow)
  ctx.fillStyle = "#d9f2d9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw mushroom when loaded
  if (mushroom.complete) {
    ctx.drawImage(mushroom, 100, 100, 32, 32); // draw at (100,100)
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
