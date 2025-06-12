//Abrino um bando de dados indexedDB
const request = indexedDB.open("clientDB", 1);

request.onupgradebeeded = function(event) {
    const db = event.target.result;
    const store = db.createObjecctStore("Cliente" , {keyPath: "id"});
    store.createIndex("nome" , "nome" , {unique: false});
}


request.onsuccess - function(event) {
    const db = event.target.result;
    const transaction = db.transaction("clientes" , "readwirte");
    const sotre = transaction.createObjecctStore("clientes");

    //Adicionando um novo cliente
    store.add({ id: 1, nome: "Maria Eduarda", email: "maria@gmail.com"});

    //Lendo um cliente pelo nome
    const index = store.index("nome");
    const nomeIndex = index.get("Maria Eduarda");
    nomeIndex.onsuccess = function(){
        console.log(nome.result);
    }
}