const prompt = require("prompt-sync")(); // Importa a função prompt do pacote prompt-sync

// Gerar posição inicial aleatória para o navio (entre 0 e 4 para que não ultrapasse o limite de 6 ao somar)
const location1 = Math.floor(Math.random() * 5);
const location2 = location1 + 1; // Navio ocupa células consecutivas
const location3 = location1 + 2;

let palpite; // Palpite do jogador
let acerto = 0; // Número de acertos
let palpitees = 0; // Número de palpites
let afundando = false; // Status do navio (se está afundado ou não)

console.log("Bem-vindo(a) à Batalha Naval!"); // Exibe mensagem de boas-vindas
console.log("Os navios estão escondidos. Tente afundá-los!");

while (afundando == false) {
  // Enquanto o navio não estiver afundado
  palpite = parseInt(prompt("Pronto, mirar, fogo! (Entre com um número entre 0-6): ")); // Solicita um palpite
  if (palpite < 0 || palpite > 6) {
    // Valida se o palpite está entre 0 e 6
    console.log("Insira um número válido!");
  } else {
    // Caso contrário, continue com a lógica do jogo
    palpitees++; // Incrementa o número total de palpites
    if (palpite == location1 || palpite == location2 || palpite == location3) {
      // Verifica se o palpite é um acerto
      console.log("Acertou!"); // Feedback de acerto
      acerto++; // Incrementa o número de acertos
      if (acerto == 3) {
        // Se todos os segmentos do navio forem acertados
        afundando = true; // Marca o navio como afundado
        console.log(`Você afundou meu navio de guerra em ${palpitees} palpites!`);
      }
    } else {
      // Caso o palpite esteja errado
      console.log("Errou!");
    }
  }
}

