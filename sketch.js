//  Alphabet F, G, +, –, [, ]
//  donde, 
//     F	Draw a line and move forward.
//     G	Move forward (without drawing a line).
//     +	Turn right.
//     –	Turn left.
//     [	Save current state.
//     ]	Restore current state.
let axiom = "F";
let rules = {
  "F" : "FF+[+F-F-F]-[-F+F+F]",
};

let generations = 4;

let length = 5;
let angle;

function setup() {
  createCanvas(400, 400);
  background(230);
  noLoop();

  angle = radians(25);
}

function draw() {
  textSize(12);
  text("L-System my implementation by CR", 10, 20)
  
  // Generando la cadena resultante de L-System
  sentence = axiom; // Generation 0  
  for(let i = 1; i <= generations; i++) {
    sentence = generate(sentence)
  }

  // renderizando la cadena
  turtle(sentence);
}

function generate(sentence) {
  let next = "";
  for (const c of sentence) {
    let foundRule = false;
    for (const key in rules) {
      if(key === c) {
        next += rules[key]
        foundRule = true;
        break;
      }
    }
    if(!foundRule) {
      next += c;
    }
  }
  return next;
}

function turtle(sentence) {
  translate(width/2, height);

  for (const c of sentence) {
    if (c === 'F') {
      line(0, 0, 0, -length);
      translate(0, -length);
    } else if (c === 'G') {
      translate(0, -length);
    } else if (c === '+') {
      rotate(angle);
    } else if (c === '-') {
      rotate(-angle);
    } else if (c === '[') {
      push();
    } else if (c === ']') {
      pop();
    }
  }
}