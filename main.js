import './style.css'

let Points = [];

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max-min) + min)
}

function evaluateFunction(expression, x, y) {
    // Construct the function with parameters x and y
    const func = new Function('x', 'y', 'return ' + expression);

    // Evaluate the function with given x and y values
    return func(x, y);
}

class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calculateColor() {
    this.color = [Math.abs((this.x-this.y))%255, 40, Math.sin(this.x*this.y)*255];
  }

  drawPoint() {
    ctx.fillStyle = `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`;
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

const canvas = document.getElementById("maincanvas");
const generatebutton = document.querySelector(".generate-button");
let widthreal = document.querySelector(".width-enter");
let heightreal = document.querySelector(".height-enter");
let redf = document.querySelector(".red-enter");
let greenf = document.querySelector(".green-enter");
let bluef= document.querySelector(".blue-enter");

canvas.setAttribute("height", heightreal.value);
canvas.setAttribute("width", widthreal.value);
const ctx = canvas.getContext("2d");

const draw = () => {
  Points = [];

  widthreal = document.querySelector(".width-enter").value;
  heightreal = document.querySelector(".height-enter").value;

  redf = document.querySelector(".red-enter").value;
  greenf = document.querySelector(".green-enter").value;
  bluef = document.querySelector(".blue-enter").value;

  canvas.setAttribute("height", heightreal);
  canvas.setAttribute("width", widthreal);

  for (let x = 0; x <= widthreal; x++) {
    for (let y = 0; y <= heightreal; y++) {
      Points.push(new Point2D(x, y));
    }
  }
  
  for (let i = 0; i <= heightreal*widthreal; i++) {
    Points[i].color = [evaluateFunction(redf, Points[i].x, Points[i].y), evaluateFunction(greenf, Points[i].x, Points[i].y), evaluateFunction(bluef, Points[i].x, Points[i].y)];
    Points[i].drawPoint();
  }
}

generatebutton.addEventListener("click", draw)