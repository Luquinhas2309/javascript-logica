//vetores ou array
let notas = [7.5, 6.3, 4.2, 9.5]

console.log("Notas iniciais", notas);

//ordenar em ordem crescente
notas.sort((a,b)=> a - b);

console.log("Notas ordenadas (crescente):", notas);

//Ordenar em ordem desrescente
notas.sort((a, b) => b - a);

console.log("Notas ordenadas (decrescente:", notas);

//vetor de strig
let frutas= ["banana", "maça", "laranja", "abacaxi"];

console.log("coleção de frutas:", frutas);
//ordernar em ordem alfabética
frutas.sort();
console.log("frutas ordenadas", frutas);

//ordenando em ordem decrecente
frutas.reverse();
console.log("frutas ordenadas (decrescente):", frutas);
