const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
const pxSize = 2;
let x = Math.floor(Math.random() * (canvas.width - 2 * pxSize));
let y = Math.floor(Math.random() * (canvas.height - 2 * pxSize));
let dx = 2;
let dy = -1;

function drawRect() {
    ctx.beginPath();
    ctx.rect(x, y, pxSize, pxSize);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect();
    
    if(x + dx > canvas.width-pxSize || x + dx < pxSize) {
        dx = -dx;
    }
    if(y + dy > canvas.height-pxSize || y + dy < pxSize) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);