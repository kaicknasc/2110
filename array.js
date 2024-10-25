//array
let lista = ["Banana", 23, true, 'Maça']; //Usamos tipos diferentes dentro da variável (string, number, boolean)

lista = ["Banana", "Maçã", "Perâ"];
//Por se tratar de uma variáival tipo Let, conseguimos alterar as informações que estão dentro dela. 
console.log(lista);

lista[0] = "Laranja"; //Aqui acessamos os índice 0 da Lista e alteramos o valor para "Laranja"
lista[1] = "Morango"; //Aqui acessamos os índice 0 da Lista e alteramos o valor para "Morango"
lista[2] = "Mexerica"; //Aqui acessamos os índice 0 da Lista e alteramos o valor para "Mexerica"
console.log(lista[2]); //Podemos imprimir no terminal o valor total da variável lista, mas também conseguimos utilizar o valor total da variável lista, mas também conseguimos utilizar o índice para uma impressão específica.

//Criando um nova string com o indice zero