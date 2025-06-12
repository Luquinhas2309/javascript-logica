//declarando a classe
class Pessoa{

    //atributos da classe
constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    
    }

    //declarando método
    saudar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }

    }

//Instânciando
const pessoa1 = new Pessoa("Ana", 35);
const pessoa2 = new Pessoa("João",20);
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());

//Nova classe
class Carros{

    //atributos
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    
    }

    //método
    exibirInfo() {
        return `Carro: ${this.marca} ${this.modelo}`;
}
}

//Instância
const meuCarro = new Carros("Fusca", "1974");
console.log(meuCarro.exibirInfo());

