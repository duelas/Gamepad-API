import { Vector2 } from './Vector2.js';

export class Controller {
  static stickDeadZone = 0.4;
  constructor(index) {
    this.index = index;
    this.aPressed = false;
    this.bPressed = false;
    this.xPressed = false;
    this.yPressed = false;
    this.rbPressed = false;
    this.rtPressed = false;
    this.lbPressed = false;
    this.ltPressed = false;
    this.selectPressed = false;
    this.startPressed = false;
    this.lStickPressed = false;
    this.rStickPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.homePressed = false;
    this.lStickDir = new Vector2(0, 0);
    this.rStickDir = new Vector2(0, 0);

    this.instantiateHTML();
  }

  destruct() {
    this.ctrl.remove();
  }

  readInput() {
    const gamepad = navigator.getGamepads()[this.index];

    if (gamepad === null) return;

    const buttons = gamepad.buttons;

    this.bPressed = buttons[0].pressed;
    this.aPressed = buttons[1].pressed;
    this.yPressed = buttons[2].pressed;
    this.xPressed = buttons[3].pressed;

    this.lbPressed = buttons[4].pressed;
    this.rbPressed = buttons[5].pressed;
    this.ltPressed = buttons[6].pressed;
    this.rtPressed = buttons[7].pressed;

    this.selectPressed = buttons[8].pressed;
    this.startPressed = buttons[9].pressed;
    this.lStickPressed = buttons[10].pressed;
    this.rStickPressed = buttons[11].pressed;

    this.upPressed = buttons[12].pressed;
    this.downPressed = buttons[13].pressed;
    this.leftPressed = buttons[14].pressed;
    this.rightPressed = buttons[15].pressed;

    this.homePressed = buttons[16].pressed;

    this.lStickDir.set(gamepad.axes[0], gamepad.axes[1]);
    this.rStickDir.set(gamepad.axes[2], gamepad.axes[3]);


  }

  instantiateHTML() {

    this.ctrl = document.createElement("div");
    this.ctrl.setAttribute("class", "controller");

    this.abxy = document.createElement("div");
    this.abxy.setAttribute("class", "abxy");

    this.aKey = document.createElement("div");
    this.aKey.setAttribute("class", "aKey");
    this.aKey.innerHTML = '<image src=".\\icons\\Switch\\Switch_A.png"></image>';
    this.abxy.appendChild(this.aKey);

    this.bKey = document.createElement("div");
    this.bKey.setAttribute("class", "bKey");
    this.bKey.innerHTML = '<image src=".\\icons\\Switch\\Switch_B.png"></image>';
    this.abxy.appendChild(this.bKey);

    this.xKey = document.createElement("div");
    this.xKey.setAttribute("class", "xKey");
    this.xKey.innerHTML = '<image src=".\\icons\\Switch\\Switch_X.png"></image>';
    this.abxy.appendChild(this.xKey);

    this.yKey = document.createElement("div");
    this.yKey.setAttribute("class", "yKey");
    this.yKey.innerHTML = '<image src=".\\icons\\Switch\\Switch_Y.png"></image>';
    this.abxy.appendChild(this.yKey);



    this.udlr = document.createElement("div");
    this.udlr.setAttribute("class", "udlr");

    this.up = document.createElement("div");
    this.up.setAttribute("class", "up");
    this.up.innerHTML = '<image src=".\\icons\\Switch\\Switch_Up.png"></image>';
    this.udlr.appendChild(this.up);

    this.down = document.createElement("div");
    this.down.setAttribute("class", "down");
    this.down.innerHTML = '<image src=".\\icons\\Switch\\Switch_Down.png"></image>';
    this.udlr.appendChild(this.down);

    this.left = document.createElement("div");
    this.left.setAttribute("class", "left");
    this.left.innerHTML = '<image src=".\\icons\\Switch\\Switch_Left.png"></image>';
    this.udlr.appendChild(this.left);

    this.right = document.createElement("div");
    this.right.setAttribute("class", "right");
    this.right.innerHTML = '<image src=".\\icons\\Switch\\Switch_Right.png"></image>';
    this.udlr.appendChild(this.right);




    this.rightStick = document.createElement("div");
    this.rightStick.setAttribute("class", "rightStick");

    this.rightStickImg = document.createElement("img");
    this.rightStickImg.setAttribute("src", ".\\icons\\Switch\\Switch_Right_Stick.png");
    this.rightStickImg.setAttribute("class", "rightStickImg");

    var rightbase = document.createElement("span");
    rightbase.setAttribute("class", "rightBase")

    this.rightStick.appendChild(rightbase);
    this.rightStick.appendChild(this.rightStickImg);



    this.leftStick = document.createElement("div");
    this.leftStick.setAttribute("class", "leftStick");

    this.leftStickImg = document.createElement("img");
    this.leftStickImg.setAttribute("src", ".\\icons\\Switch\\Switch_Left_Stick.png");
    this.leftStickImg.setAttribute("class", "leftStickImg");

    var leftbase = document.createElement("span");
    leftbase.setAttribute("class", "leftBase");

    this.leftStick.appendChild(leftbase);
    this.leftStick.appendChild(this.leftStickImg);



    this.rShoulder = document.createElement("div");
    this.rShoulder.setAttribute("class", "rShoulder");

    this.rb = document.createElement("div");
    this.rb.setAttribute("class", "rb");
    this.rb.innerHTML = '<image src=".\\icons\\Switch\\Switch_RB.png"></image>';
    this.rShoulder.appendChild(this.rb);

    this.rt = document.createElement("div");
    this.rt.setAttribute("class", "rt");
    this.rt.innerHTML = '<image src=".\\icons\\Switch\\Switch_RT.png"></image>';
    this.rShoulder.appendChild(this.rt);

    this.lShoulder = document.createElement("div");
    this.lShoulder.setAttribute("class", "lShoulder");

    this.lb = document.createElement("div");
    this.lb.setAttribute("class", "lb");
    this.lb.innerHTML = '<image src=".\\icons\\Switch\\Switch_LB.png"></image>';
    this.lShoulder.appendChild(this.lb);

    this.lt = document.createElement("div");
    this.lt.setAttribute("class", "lt");
    this.lt.innerHTML = '<image src=".\\icons\\Switch\\Switch_LT.png"></image>';
    this.lShoulder.appendChild(this.lt);


    this.cellSelect = document.createElement("div");
    this.cellSelect.setAttribute("class", "cellSelect");
    this.select = document.createElement("div");
    this.select.setAttribute("class", "select");
    this.select.innerHTML = '<image src=".\\icons\\Switch\\Switch_Minus.png"></image>';
    this.cellSelect.appendChild(this.select);

    this.cellStart = document.createElement("div");
    this.cellStart.setAttribute("class", "cellStart");
    this.start = document.createElement("div");
    this.start.setAttribute("class", "start");
    this.start.innerHTML = '<image src=".\\icons\\Switch\\Switch_Plus.png"></image>';
    this.cellStart.appendChild(this.start);

    this.cellHome = document.createElement("div");
    this.cellHome.setAttribute("class", "cellHome");
    this.home = document.createElement("div");
    this.home.setAttribute("class", "home");
    this.home.innerHTML = '<image src=".\\icons\\Switch\\Switch_Home.png"></image>';
    this.cellHome.appendChild(this.home);


    this.ctrl.appendChild(this.abxy);
    this.ctrl.appendChild(this.udlr);
    this.ctrl.appendChild(this.rightStick);
    this.ctrl.appendChild(this.leftStick);
    this.ctrl.appendChild(this.rShoulder);
    this.ctrl.appendChild(this.lShoulder);
    this.ctrl.appendChild(this.cellSelect);
    this.ctrl.appendChild(this.cellStart);
    this.ctrl.appendChild(this.cellHome);


    document.getElementsByClassName("controllerPanel")[0].appendChild(this.ctrl);

  }

  drawUI() {

    this.bKey.style.opacity = this.bPressed ? "0.9" : "0.3";

    this.aKey.style.opacity = this.aPressed ? "0.9" : "0.3";

    this.yKey.style.opacity = this.yPressed ? "0.9" : "0.3";

    this.xKey.style.opacity = this.xPressed ? "0.9" : "0.3";


    this.up.style.opacity = this.upPressed ? "0.9" : "0.3";

    this.down.style.opacity = this.downPressed ? "0.9" : "0.3";

    this.right.style.opacity = this.rightPressed ? "0.9" : "0.3";

    this.left.style.opacity = this.leftPressed ? "0.9" : "0.3";

    this.rb.style.opacity = this.rbPressed ? "0.9" : "0.3";

    this.rt.style.opacity = this.rtPressed ? "0.9" : "0.3";

    this.lb.style.opacity = this.lbPressed ? "0.9" : "0.3";

    this.lt.style.opacity = this.ltPressed ? "0.9" : "0.3";

    this.rightStickImg.style.marginLeft = this.rStickDir.x * 33 + "%";
    this.rightStickImg.style.marginRight = (-this.rStickDir.x * 33) + "%";
    this.rightStickImg.style.marginTop = this.rStickDir.y * 33 + "%";
    this.rightStickImg.style.marginBottom = (-this.rStickDir.y * 33) + "%";
    this.rightStickImg.style.opacity = 0.3 + this.rStickDir.magnitude() / Controller.stickDeadZone + this.rStickPressed;
    this.rightStickImg.style.scale = 1 + this.rStickPressed * .5;

    this.leftStickImg.style.marginLeft = this.lStickDir.x * 33 + "%";
    this.leftStickImg.style.marginRight = (-this.lStickDir.x * 33) + "%";
    this.leftStickImg.style.marginTop = this.lStickDir.y * 33 + "%";
    this.leftStickImg.style.marginBottom = (-this.lStickDir.y * 33) + "%";
    this.leftStickImg.style.opacity = 0.3 + this.lStickDir.magnitude() / Controller.stickDeadZone + this.lStickPressed;
    this.leftStickImg.style.scale = 1 + this.lStickPressed * .5;

    this.start.style.opacity = this.startPressed ? "0.9" : "0.3";

    this.select.style.opacity = this.selectPressed ? "0.9" : "0.3";

    this.home.style.opacity = this.homePressed ? "0.9" : "0.3";

  }
}