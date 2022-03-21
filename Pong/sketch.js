//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 4;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 586;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}

function movimentaMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x,y) {
  if(x==xRaquete)
    if (xBolinha - raio < x + raqueteComprimento && yBolinha - raio < y + raqueteAltura && yBolinha + raio > y || x==xRaqueteOponente ) {
          velocidadeXBolinha *= -1;
          raquetada.play()
      }
  if(x==xRaqueteOponente){
    if (xBolinha + raio > x && yBolinha - raio < y + raqueteAltura && yBolinha + raio > y) {
        velocidadeXBolinha *= -1;
        raquetada.play()
    }
  }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}
function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  fill(color(255, 140, 0))
  rect(150, 10, 40,20)
  fill(255)
  text(meusPontos, 170, 26)
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20)
  fill(255)
  text(pontosDoOponente, 470, 26)
} 
function marcaPonto(){
  if(xBolinha >590){
    meusPontos += 1
    ponto.play()
  }
  if(xBolinha < 10){
    pontosDoOponente += 1
    ponto.play()
  }

}
function calculaChanceDeErrar(){
  if (meusPontos>=pontosDoOponente){
    chanceDeErrar+=1
      if (chanceDeErrar >= 39){
      chanceDeErrar=40
    }
  }else{
    chanceDeErrar -= 1
    if(chanceDeErrar <=35){
      chanceDeErrar=35
    }
  }  
}