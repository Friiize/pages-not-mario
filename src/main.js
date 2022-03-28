//HTML VARIABLES
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

//ARRAYS
const walkAnim = [new Image().src = "../res/notMarioWalk0.png", new Image().src = "../res/notMarioWalk1.png"];
const jumpAnim = [new Image().src = "../res/notMarioJump0.png", new Image().src = "../res/notMarioJump1.png"];
const diveAnim = [new Image().src = "../res/notMarioDive0.png", new Image().src = "../res/notMarioDive1.png"]
//GLOBAL VARs
const fps = 60;
const character = new Image().src;
const project = new Image();

//CONFIG
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
character.src = "https://friiize.github.io/pages-not-mario/res/notMarioIdle.png";
project.src = "";

//CLASS MODELS
class Player {
    constructor() {
        this.x = canvas.width / 1000;
        this.y = canvas.height - 100;
        this.width = 50;
        this.heigth = 100;
        this.frame = 0;
    }

    draw() {
        ctx.drawImage(character.src, 0, 0, 512, 512, this.x, this.y, 64, 64);
    }

    action(e) {
        switch (e.keyCode) {
            case 37: this.move(-1, this.frame); break;
            case 38: this.jump(); break;
            case 39: this.move(1); break;
            case 40: this.dive(); break;
        }
        this.draw();
        this.frame = 0;
    }

    move(x, frame) {
        this.y += (x === 1) ? 100 : -100;
        frame = (frame === 1) ? 0 : 1;
        let walk = new Image();
        walk.src = walkAnim[frame];
        ctx.drawImage(walk, 0, 0, 512, 512, this.x, this.y, 64, 64);
        if (x >= 2 || x <= canvas.width - 2) this.x = x;
    }


    jump() {}

    dive() {}
}

class Project {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.posYs = [];
        this.posXs = [];
        this.isJumped = false;
        this.links = [
            "https://github.com/Friiize/WelcompEnds",
            "https://github.com/Friiize/pages-not-mario",
            "https://github.com/Friiize/welcomp-apps",
            "https://github.com/Friiize/BatailleNavale",
            "https://github.com/Friiize/rekindle-dev"
        ];
    }

    draw() {
        ctx.drawImage(project, 0, 0, 512, 512, this.x, this.y, 64, 64);
    }
}

//INIT
setInterval(update, 1000/ fps);
let player = new Player();
document.addEventListener("keydown", player.action);

function initProjects() {

}

function update () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerUpdate();
    projectUpdate();
}

function playerUpdate() {
    player.draw();
}

function projectUpdate() {

}
