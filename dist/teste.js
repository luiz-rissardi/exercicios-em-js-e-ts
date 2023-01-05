class pessoa {
    constructor(nome, idade, sobrenome) {
        this.nome = nome;
        this.idade = idade;
        this.sobrenome = sobrenome;
    }
    getAll() {
        return this.nome;
    }
}
const person1 = new pessoa("luiz", 16, "rissardi");
const nome = person1.getAll();
console.log(nome);
export {};
