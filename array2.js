let matrizVendas = [
    [100, 200, 300], //Loja A
    [400, 500, 50], //Loja B
    [700, 400, 450,], //Loja C
]

console.log(matrizVendas[0]);

matrizVendas[0][1] = 800; //Indo no índice 0 (Loja A) e bsucando o índice interno do elemento.

console.log(matrizVendas[0]); //Fazendo a imoressão da loja A no Terminal.


let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];

console.log(resultadoLojaB);

