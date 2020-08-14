//Função que irá imprimir a lista de produtos de forma ordenada
function imprimirListaNomes (objJson){
    
    var arrJson = Object.values(objJson); //transforma o objeto contendo os produtos em uma array para que possa ser ordenado
    var listaDeCategorias = []; //criação de uma array que conterá somente as categorias existentes
    var listaAcc = []; //criação de arrays auxiliares para cada categoria
    var listaEletrodo = [];
    var listaEletroni = [];
    var listaPan = [];

    for (var i = 0; i < arrJson.length; i++){ 
        listaDeCategorias[i] = arrJson[i].category;
    }
    listaDeCategorias.sort(); //organiza a array de categorias em ordem alfabética
    listaDeCategorias = listaDeCategorias.filter(function(a, b) { //função que retira categorias repetidas
        return listaDeCategorias.indexOf(a) == b;
    })

    //as arrays de cada categoria recebem seus respectivos produtos
    for (var j = 0; j < arrJson.length; j++){
        if (arrJson[j].category === listaDeCategorias[0]){
            listaAcc.push(arrJson[j]);
        }
        if (arrJson[j].category === listaDeCategorias[1]){
            listaEletrodo.push(arrJson[j]);
        }
        if (arrJson[j].category === listaDeCategorias[2]){
            listaEletroni.push(arrJson[j]);
        }
        if (arrJson[j].category === listaDeCategorias[3]){
            listaPan.push(arrJson[j]);
        }
    }
    
    //os produtos são ordenados em ordem crescente de id
    listaAcc.sort(function(a, b) {
        return a.id - b.id;
    });
    listaEletrodo.sort(function(a, b) {
        return a.id - b.id;
    });
    listaEletroni.sort(function(a, b) {
        return a.id - b.id;
    });
    listaPan.sort(function(a, b) {
        return a.id - b.id;
    });

    var listaDeProdutos = [listaAcc,listaEletrodo,listaEletroni,listaPan];
    console.log(listaDeProdutos)
    return listaDeProdutos;  
}