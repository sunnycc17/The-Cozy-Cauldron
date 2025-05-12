const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load background images
const bgDay = new Image();
const bgNight = new Image();

bgDay.src = "./assets/images/canvaMorning.png";
bgNight.src = "./assets/images/canvas.png";

let currentBg = bgDay;

let imagesLoaded = 0;

bgDay.onload = () => {
  imagesLoaded++;
  if (imagesLoaded === 2) gameLoop();
};

bgNight.onload = () => {
  imagesLoaded++;
  if (imagesLoaded === 2) gameLoop();
};

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(currentBg, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}

// Optional: switch backgrounds
setInterval(() => {
  currentBg = currentBg === bgDay ? bgNight : bgDay;
}, 5000);
