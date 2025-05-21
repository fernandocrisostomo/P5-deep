let chickens = [];
let eggs = [];
let conveyor;
let city = { population: 0, happiness: 50 };
let isHoliday = false;
let dayCycle = 0;

function setup() {
  createCanvas(1000, 600);
  frameRate(30);
  
  // Sistema de esteira
  conveyor = {
    x: 0,
    y: height - 50,
    width: width,
    speed: 2,
    move: function() {
      this.x = (this.x + this.speed) % width;
    }
  };
  
  // Cria 3 galinhas iniciais
  for(let i = 0; i < 3; i++) {
    chickens.push(new Chicken(random(50, width-50), 50);
  }
  
  // Controle de feriado
  let holidayCheckbox = createCheckbox(' Modo Feriado', false);
  holidayCheckbox.changed(() => toggleHoliday());
  holidayCheckbox.position(10, height - 30);
}

function draw() {
  // Atualiza ciclo dia/noite
  dayCycle = (dayCycle + 0.2) % 360;
  updateBackground();
  
  // Atualiza elementos do jogo
  updateGameElements();
  drawConveyorSystem();
  drawCityProgress();
  displayGameStats();
}

function updateBackground() {
  // Céu dinâmico
  let skyHue = isHoliday ? 360 : map(sin(radians(dayCycle)), -1, 1, 200, 240);
  background(skyHue, 50, 90);
  
  // Estrelas noturnas
  if(!isHoliday && dayCycle > 180) {
    drawStars();
  }
}

function updateGameElements() {
  // Atualiza galinhas
  chickens.forEach(chicken => {
    chicken.move();
    chicken.display();
    if(chicken.shouldLayEgg()) {
      eggs.push(new Egg(chicken.position));
    }
  });
  
  // Atualiza ovos
  updateEggs();
}

function drawConveyorSystem() {
  // Desenha esteira
  conveyor.move();
  fill(150);
  rect(0, conveyor.y, width, 50);
  
  // Efeito de movimento
  drawConveyorBelt();
}

// ... (continua com o restante das funções do código anterior, sem dependências externas)

class Chicken {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.eggTimer = new Timer(random(1, 3));
  }

  move() {
    this.position.x += random(-1, 1);
    this.position.x = constrain(this.position.x, 50, width-50);
  }

  shouldLayEgg() {
    return this.eggTimer.check();
  }

  display() {
    // Corpo colorido
    fill(isHoliday ? color(360, 80, 90) : color(60, 80, 95));
    ellipse(this.position.x, this.position.y, 40, 35);
    
    // Cabeça
    fill(360, 0, 100);
    ellipse(this.position.x + 15, this.position.y - 20, 20, 18);
  }
}

// Sistema de temporizador auxiliar
class Timer {
  constructor(interval) {
    this.interval = interval * 60; // Converte para frames
    this.counter = 0;
  }

  check() {
    this.counter++;
    if(this.counter >= this.interval) {
      this.reset();
      return true;
    }
    return false;
  }

  reset() {
    this.counter = 0;
    this.interval = random(1, 3) * 60;
  }
}