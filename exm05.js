const pessoa = {
    nome: "Rodrigo",
    idade: 21,
};

console.log(pessoa);

console.table(pessoa);

console.log(pessoa.idade, pessoa.nome);

console.log(pessoa["idade"], pessoa["nome"]);

pessoa.altura = 1.72;
pessoa["massa"] = 80;

console.table(pessoa);