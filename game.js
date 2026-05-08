const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const player = {
    x: 300,
    y: 1200,
    width: 40,
    height: 55,
    speed: 5
};

const nodes = [
    { x: 300, y: 1200 },

    { x: 700, y: 900 },
    { x: 700, y: 1500 },

    { x: 1200, y: 700 },
    { x: 1200, y: 1200 },
    { x: 1200, y: 1700 },

    { x: 1800, y: 900 },
    { x: 1800, y: 1500 },

    { x: 2400, y: 1200 },

    { x: 3200, y: 1200 }
];

const paths = [
    [0,1],
    [0,2],

    [1,3],
    [1,4],

    [2,4],
    [2,5],

    [3,6],
    [4,6],
    [4,7],
    [5,7],

    [6,8],
    [7,8],

    [8,9]
];

function updatePlayer(){

    let nextX = player.x;
    let nextY = player.y;

    if(keys["w"] || keys["arrowup"]){
        nextY -= player.speed;
    }

    if(keys["s"] || keys["arrowdown"]){
        nextY += player.speed;
    }

    if(keys["a"] || keys["arrowleft"]){
        nextX -= player.speed;
    }

    if(keys["d"] || keys["arrowright"]){
        nextX += player.speed;
    }

    if(canMoveTo(nextX, nextY)){
        player.x = nextX;
        player.y = nextY;
    }

}

function canMoveTo(x, y){

    for(const path of paths){

        const start = nodes[path[0]];
        const end = nodes[path[1]];

        const dist = distanceToLineSegment(
            x,
            y,
            start.x,
            start.y,
            end.x,
            end.y
        );

        if(dist < 60){
            return true;
        }

    }

    return false;
}

function distanceToLineSegment(px, py, x1, y1, x2, y2){

    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;

    let param = -1;

    if(lenSq !== 0){
        param = dot / lenSq;
    }

    let xx, yy;

    if(param < 0){
        xx = x1;
        yy = y1;
    }
    else if(param > 1){
        xx = x2;
        yy = y2;
    }
    else{
        xx = x1 + param * C;
        yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;

    return Math.sqrt(dx * dx + dy * dy);
}

function updateCamera(){

    camera.x = player.x - canvas.width / 2;
    camera.y = player.y - canvas.height / 2;

    camera.x = Math.max(
        0,
        Math.min(world.width - canvas.width, camera.x)
    );

    camera.y = Math.max(
        0,
        Math.min(world.height - canvas.height, camera.y)
    );
}

function drawBackground(){

    for(let x = 0; x < world.width; x += 80){

        for(let y = 0; y < world.height; y += 80){

            if((x + y) % 160 === 0){
                ctx.fillStyle = "#7ac74f";
            }
            else{
                ctx.fillStyle = "#6db44a";
            }

            ctx.fillRect(
                x - camera.x,
                y - camera.y,
                80,
                80
            );

        }

    }

}

function drawPaths(){

    ctx.lineWidth = 90;
    ctx.strokeStyle = "#c19a6b";

    ctx.lineCap = "round";

    for(const path of paths){

        const start = nodes[path[0]];
        const end = nodes[path[1]];

        ctx.beginPath();

        ctx.moveTo(
            start.x - camera.x,
            start.y - camera.y
        );

        ctx.lineTo(
            end.x - camera.x,
            end.y - camera.y
        );

        ctx.stroke();
    }

}

function drawNodes(){

    for(let i = 0; i < nodes.length; i++){

        const node = nodes[i];

        ctx.fillStyle = "#2c3e50";

        ctx.beginPath();

        ctx.arc(
            node.x - camera.x,
            node.y - camera.y,
            45,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.fillStyle = "#f1c40f";

        ctx.beginPath();

        ctx.arc(
            node.x - camera.x,
            node.y - camera.y,
            22,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}

function drawTrees(){

    for(let x = 0; x < world.width; x += 400){

        for(let y = 0; y < world.height; y += 400){

            ctx.fillStyle = "#8b5a2b";

            ctx.fillRect(
                x - camera.x + 20,
                y - camera.y + 40,
                25,
                50
            );

            ctx.fillStyle = "#2e8b57";

            ctx.beginPath();

            ctx.arc(
                x - camera.x + 30,
                y - camera.y + 30,
                55,
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
        22
    );

    ctx.fillStyle = "#ffcc99";

    ctx.beginPath();

    ctx.arc(
        player.x - camera.x + 20,
        player.y - camera.y - 10,
        16,
        0,
        Math.PI * 2
    );

    ctx.fill();

}

function render(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawBackground();

    drawPaths();

    drawTrees();

    drawNodes();

    drawPlayer();

}

function gameLoop(){

    updatePlayer();

    updateCamera();

    render();

    requestAnimationFrame(gameLoop);
}

gameLoop();