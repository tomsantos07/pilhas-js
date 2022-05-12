var elementos = [];
var topo = -1;
const Max = 10;

function pushNumber(num) {
  if (topo < Max) {
    topo ++
    elementos[topo] = num;
  }
  else {
    console.log("A pilha está cheia");
  }
}

function estaVazia() {
  return topo === -1
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo];
    topo --
    return num;
  }
  else {
    console.log("A pilha está vazia");
  }
}

//-- Parte do cógio que usa pilha --//

var numDecimal = 10;
var resto;

console.log("Hora de empilhar");
while(numDecimal != 0) {
  resto = parseInt(numDecimal % 2);
  pushNumber(resto);
  console.log(resto);
  numDecimal = parseInt(numDecimal / 2);
}

console.log("Desempilhando");
while(!estaVazia()) {
  console.log(pop());
}
