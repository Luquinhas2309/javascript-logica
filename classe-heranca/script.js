//Superclasse
class Animal{

    //Atributo
    constructor(nome) {
        this.nome = nome;
    }

    //Método
    fazerSom() {
        console.log("O animal fez um som");
    }
}

//Subclasse
class Cachorro extends Animal{

}

let rex = new Cachorro("Rex");
console.log(rex.nome);
rex.fazerSom();

