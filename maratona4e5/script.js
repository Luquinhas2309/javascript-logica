for (let minutos = 10; minutos >= 0; minutos--) {
  setTimeout(() => {
    if (minutos > 0) {
      console.log(`Faltam ${minutos} minuto(s) para a sorveteria fechar.`);
    } else {
      console.log("A sorveteria está agora fechada!");
    }
  }, (10 - minutos) * 60000); // espera de 1 minuto entre cada mensagem
}




// Vetor com temperaturas de 5 dias
let temperaturas = [22, 25, 20, 23, 21];

// Exibir todas as temperaturas com laço for
for (let i = 0; i < temperaturas.length; i++) {
  console.log(`Temperatura do dia ${i + 1}: ${temperaturas[i]}°C`);
}

// Calcular a média das temperaturas
let soma = 0;
for (let i = 0; i < temperaturas.length; i++) {
  soma += temperaturas[i];
}
let media = soma / temperaturas.length;

console.log(`Temperatura média da semana: ${media.toFixed(2)}°C`);



// Vetor com preços dos produtos
let precos = [19.90, 5.50, 12.30, 25.00, 8.75];

// Ordenar em ordem crescente
precos.sort((a, b) => a - b);

// Exibir os preços ordenados
console.log("Preços em ordem crescente:");
for (let i = 0; i < precos.length; i++) {
  console.log(`R$ ${precos[i].toFixed(2)}`);
}