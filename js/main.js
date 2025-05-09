const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Plain empty game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  requestAnimationFrame(gameLoop);
}

gameLoop();
