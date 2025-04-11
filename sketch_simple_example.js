// let alphabet A, B
let axiom = "A";
let rules = {
  "A" : "AB",
  "B" : "A"
};
let generations = 4;

function setup() {
  createCanvas(400, 400);
  background(230);
  noLoop();
}

function draw() {
  textSize(16);

  sentence = axiom; // Generation 0
  text("G-0 : "+sentence, 10, 20);
  
  for(let i = 1; i <= generations; i++) {
    sentence = generate(sentence) // i-th Generation
    text("G-"+i+": "+sentence, 10, 20+i*20);
  }
}

function generate(sentence) {
  let next = "";

  for (const c of sentence) {
    let foundRule = false;
    for (const key in rules) {
      if(key === c) {
        next += rules[key];
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