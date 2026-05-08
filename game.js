const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const TILE = 64;

const world = {
  width: 4000,
  height: 2500
};

const camera = {
  x: 0,
  y: 0
};

const keys = {};

window.addEventListener("keydown", e => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", e => {
  keys[e.key.toLowerCase()] = false;
});

const player = {
  x: 500,
  y: 500,
  width: 40,
  height: 50,
  speed: 5
};

function updatePlayer(){

  if(keys["w"] || keys["arrowup"]){
    player.y -= player.speed;
  }

  if(keys["s"] || keys["arrowdown"]){
    player.y += player.speed;
  }

  if(keys["a"] || keys["arrowleft"]){
    player.x -= player.speed;
  }

  if(keys["d"] || keys["arrowright"]){
    player.x += player.speed;
  }

  player.x = Math.max(0, Math.min(world.width - player.width, player.x));
  player.y = Math.max(0, Math.min(world.height - player.height, player.y));
}

function updateCamera(){

  camera.x = player.x - canvas.width / 2;
  camera.y = player.y - canvas.height / 2;

  camera.x = Math.max(0, Math.min(world.width - canvas.width, camera.x));
  camera.y = Math.max(0, Math.min(world.height - canvas.height, camera.y));
}

function drawGrass(){

  for(let x = 0; x < world.width; x += TILE){

    for(let y = 0; y < world.height; y += TILE){

      if((x + y) % 128 === 0){
        ctx.fillStyle = "#78c850";
      }
      else{
        ctx.fillStyle = "#6db44a";
      }

      ctx.fillRect(
        x - camera.x,
        y - camera.y,
        TILE,
        TILE
      );

    }

  }

}

function drawTrees(){

  for(let x = 0; x < world.width; x += 300){

    for(let y = 0; y < world.height; y += 300){

      ctx.fillStyle = "#8b5a2b";

      ctx.fillRect(
        x - camera.x + 20,
        y - camera.y + 40,
        20,
        40
      );

      ctx.fillStyle = "#2e8b57";

      ctx.beginPath();

      ctx.arc(
        x - camera.x + 30,
        y - camera.y + 30,
        40,
        0,
        Math.PI * 2
      );

      ctx.fill();

    }

  }

}

function drawPlayer(){

  ctx.fillStyle = "#111";

  ctx.fillRect(
    player.x - camera.x,
    player.y - camera.y,
    player.width,
    player.height
  );

  ctx.fillStyle = "#ffffff";

  ctx.fillRect(
    player.x - camera.x,
    player.y - camera.y,
    player.width,
    20
  );

  ctx.fillStyle = "#ffcc99";

  ctx.beginPath();

  ctx.arc(
    player.x - camera.x + 20,
    player.y - camera.y - 10,
    15,
    0,
    Math.PI * 2
  );

  ctx.fill();

}

function render(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawGrass();
  drawTrees();
  drawPlayer();

}

function gameLoop(){

  updatePlayer();
  updateCamera();
  render();

  requestAnimationFrame(gameLoop);

}

gameLoop();

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});