const fs = require('fs');
const hello = require('./hello');
//const pessoa = require('./pessoa');
const {mostraNome, mostraIdade} = require('./models/pessoa');


const nome = 'Helena';
const sobrenome = 'Maia';
console.log(`${nome} ${sobrenome}`);


fs.readFile('./arquivos/ler.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


hello('Murilo');

//console.log(pessoa.mostraNome());
//console.log(pessoa.mostraIdade());

console.log(mostraNome());
console.log(mostraIdade());