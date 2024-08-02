/*  
      Name: Mehak Kapur
      Date: 01/08/2024
      File: main.js
      Description: assignment4 Part4 - Adding features to our bouncing balls demo
*/

// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const ballCount = document.getElementById("score");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const numBalls = 25;
let score = numBalls;
ballCount.textContent = `Ball count: ${score}`;
// function to generate random number

function random(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class Ball extends Shape{
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        this.exist = true;
}

draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

update() {
    if (this.x + this.size >= width) {
    this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
    this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
    this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
    this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

collisionDetect() {
    for (const ball of balls) {
    if (!(this === ball) && ball.exist) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
        }
    }
    }
}
}

class EvilCircle extends Shape{
    constructor(x, y, velX, velY, color, size) {
        super(x, y, 20, 20);
        this.color = "white";
        this.size = 10;
        this.exist = true;

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
            case "a":
                this.x -= this.velX;
                break;
            case "d":
                this.x += this.velX;
                break;
            case "w":
                this.y -= this.velY;
                break;
            case "s":
                this.y += this.velY;
                break;
            }
        });
        
}

draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(650, 250, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

checkBounds() {
    if (this.x + this.size >= width) {
    this.x = -Math.abs(this.x);
    }

    if (this.x - this.size <= 0) {
    this.x = Math.abs(this.x);
    }

    if (this.y + this.size >= height) {
    this.y = -Math.abs(this.y);
    }

    if (this.y - this.size <= 0) {
    this.y = Math.abs(this.y);
    }

}

collisionDetect() {
    for (const ball of balls) {
    if (ball.exist) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
            ball.exist = false;
            score --;
            ballCount.textContent = `Ball count: ${score}`;
        }
    }
    }
}
}


const balls = [];


while (balls.length < numBalls) {
const size = random(10, 20);
const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
);

balls.push(ball);
}




const size = 25;
const evilCircle = new EvilCircle(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    "black",
    size
);

function loop() {
ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
ctx.fillRect(0, 0, width, height);

for (const ball of balls) {
    if (ball.exist){
    ball.draw();
    ball.update();
    ball.collisionDetect();
    }
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();
}

requestAnimationFrame(loop);
}

loop();