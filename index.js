import { Vector2 } from './Vector2.js';
import { Controller } from './Controller.js';

const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
var i = 0;
var controllers = [];


function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  

}


setupCanvas();

window.addEventListener("resize", setupCanvas);
window.addEventListener("gamepadconnected", (event) => {
  controllers[event.gamepad.index] = new Controller(event.gamepad.index);
  console.log("Controller " + event.gamepad.index + " connected");
});

window.addEventListener("gamepaddisconnected", (event) => {
  controllers[event.gamepad.index].destruct();
  controllers[event.gamepad.index] = null;
  console.log("Controller " + event.gamepad.index + " disconnected");
});

function clearScreen() {
  ctx.fillStyle = "#353535";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function controllerCycle() {
controllers.forEach(e => {if(e) e.readInput()});
controllers.forEach(e => {if(e) e.drawUI()});
}


function gameLoop() {
  clearScreen();
  controllerCycle();
  requestAnimationFrame(gameLoop);
}

gameLoop();