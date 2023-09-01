import { Vector2 } from './Vector2.js';

const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
let controllerIndex = null;

const stickDeadZone = 0.4;

let playerWidthAndHeight = 0;
let playerX = 0;
let playerY = 0;

let velocity = 0;

let aPressed = false;
let bPressed = false;
let xPressed = false;
let yPressed = false;

let rbPressed = false;
let rtPressed = false;
let lbPressed = false;
let ltPressed = false;

let selectPressed = false;
let startPressed = false;
let lStickPressed = false;
let rStickPressed = false;



let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let homePressed = false;

let leftStick = new Vector2(0, 0);
let rightStick = new Vector2(0, 0);

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  playerWidthAndHeight = canvas.width * 0.1;
  velocity = canvas.width * 0.01;

  playerX = (canvas.width - playerWidthAndHeight) / 2;
  playerY = (canvas.height - playerWidthAndHeight) / 2;

}


setupCanvas();

window.addEventListener("resize", setupCanvas);
window.addEventListener("gamepadconnected", (event) => {
  controllerIndex = event.gamepad.index;
  console.log("connected");
});

window.addEventListener("gamepaddisconnected", (event) => {
  console.log("disconnected");
  controllerIndex = null;
});

function clearScreen() {
  ctx.fillStyle = "#353535";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function controllerInput() {
  if (controllerIndex !== null) {
    const gamepad = navigator.getGamepads()[controllerIndex];

    const buttons = gamepad.buttons;

    bPressed = buttons[0].pressed;
    aPressed = buttons[1].pressed;
    yPressed = buttons[2].pressed;
    xPressed = buttons[3].pressed;

    lbPressed = buttons[4].pressed;
    rbPressed = buttons[5].pressed;
    ltPressed = buttons[6].pressed;
    rtPressed = buttons[7].pressed;

    selectPressed = buttons[8].pressed;
    startPressed = buttons[9].pressed;
    lStickPressed = buttons[10].pressed;
    rStickPressed = buttons[11].pressed;

    upPressed = buttons[12].pressed;
    downPressed = buttons[13].pressed;
    leftPressed = buttons[14].pressed;
    rightPressed = buttons[15].pressed;

    homePressed = buttons[16].pressed;



    leftStick.set(gamepad.axes[0], gamepad.axes[1]);
    rightStick.set(gamepad.axes[2], gamepad.axes[3]);


  }

  controllerUI();
}


function controllerUI() {

  var element = document.getElementById('bKey');
  element.style.opacity = bPressed ? "0.9" : "0.3";

  var element = document.getElementById('aKey');
  element.style.opacity = aPressed ? "0.9" : "0.3";

  var element = document.getElementById('yKey');
  element.style.opacity = yPressed ? "0.9" : "0.3";

  var element = document.getElementById('xKey');
  element.style.opacity = xPressed ? "0.9" : "0.3";


  var element = document.getElementById('up');
  element.style.opacity = upPressed ? "0.9" : "0.3";

  var element = document.getElementById('down');
  element.style.opacity = downPressed ? "0.9" : "0.3";

  var element = document.getElementById('right');
  element.style.opacity = rightPressed ? "0.9" : "0.3";

  var element = document.getElementById('left');
  element.style.opacity = leftPressed ? "0.9" : "0.3";

  var element = document.getElementById('rb');
  element.style.opacity = rbPressed ? "0.9" : "0.3";

  var element = document.getElementById('rt');
  element.style.opacity = rtPressed ? "0.9" : "0.3";

  var element = document.getElementById('lb');
  element.style.opacity = lbPressed ? "0.9" : "0.3";

  var element = document.getElementById('lt');
  element.style.opacity = ltPressed ? "0.9" : "0.3";

  var element = document.getElementById('rightStickImg');
  element.style.marginLeft = rightStick.x * 33 + "%";
  element.style.marginRight = (-rightStick.x * 33) + "%";
  element.style.marginTop = rightStick.y * 33 + "%";
  element.style.marginBottom = (-rightStick.y * 33) + "%";
  element.style.opacity = 0.3 + rightStick.magnitude() / stickDeadZone + rStickPressed;
  element.style.scale = 1 + rStickPressed * .5;

  var element = document.getElementById('leftStickImg');
  element.style.marginLeft = leftStick.x * 33 + "%";
  element.style.marginRight = (-leftStick.x * 33) + "%";
  element.style.marginTop = leftStick.y * 33 + "%";
  element.style.marginBottom = (-leftStick.y * 33) + "%";
  element.style.opacity = 0.3 + leftStick.magnitude() / stickDeadZone + lStickPressed;
  element.style.scale = 1 + lStickPressed * .5;

  var element = document.getElementById('start');
  element.style.opacity = startPressed ? "0.9" : "0.3";

  var element = document.getElementById('select');
  element.style.opacity = selectPressed ? "0.9" : "0.3";

  var element = document.getElementById('home');
  element.style.opacity = homePressed ? "0.9" : "0.3";

}


function gameLoop() {
  clearScreen();
  controllerInput();
  requestAnimationFrame(gameLoop);
}

gameLoop();