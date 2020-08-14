//Transforma o conteúdo de texto da broken-database em uma string
var txtJson = (
    '[{"id": 5677240,"name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris", "quantity": 21, "price": "192.84","category": "Panelas"},{"id": 9628920,"name": "Lævæ & Se¢æ 10,2 Kg Sæmsung E¢ø ßußßle ßræn¢æ ¢øm 09 Prøgræmæs de Lævægem", "quantity": 57,"price": 3719.70,"category": "Eletrodomésticos"},{"id": 1316334,"name": "Refrigerædør ßøttøm Freezer Ele¢trølux de 02 Pørtæs Frøst Free ¢øm 598 Litrøs","quantity": 12,"price": 3880.23,"category": "Eletrodomésticos"},{"id": 6502394,"name": "Føgãø de Pisø Ele¢trølux de 04 ßø¢æs, Mesæ de Vidrø Prætæ","quantity": 37,"price": "1419","category": "Eletrodomésticos"},{"id": 9576720,"name": "Førnø Mi¢rø-øndæs Pænæsøni¢ ¢øm ¢æpæ¢idæde de 21 Litrøs ßræn¢ø","quantity": 13,"price": "358.77","category": "Eletrodomésticos"},{"id": 8875900,"name": "Smært TV 4K Søny LED 65” 4K X-Reælity Prø, UpS¢ælling, Møtiønfløw XR 240 e Wi-F","quantity": 0,"price": 5799.42,"category": "Eletrônicos"},{"id": 9746439,"name": "Høme Theæter LG ¢øm ßlu-ræy 3D, 5.1 ¢ænæis e 1000W","quantity": 80,"price": 2199,"category": "Eletrônicos"},{"id": 2162952,"name": "Kit Gæmer æ¢er - Nøteßøøk + Heædset + Møuse","price": "25599.00","category": "Eletrônicos"},{"id": 3500957,"name": "Mønitør 29 LG FHD Ultræwide ¢øm 1000:1 de ¢øntræste","quantity": 18,"price": 1559.40,"category": "Eletrônicos"},{"id": 1911864,"name": "Møuse Gæmer Predætør ¢estus 510 Føx Pretø","price": "699","category": "Acessórios"}]'
);

//Transforma a string anterior em um objeto
for(var i = 0; i < txtJson.length; i++){
    var objJson = JSON.parse(txtJson);
}

//Função que converte todos os preços para o tipo número
function converterPrecos (objJson){

    for (let i = 0; i < objJson.length; i++){
        objJson[i].price = Number(objJson[i].price).toFixed(2);
        objJson[i].price = Number(objJson[i].price);
    }
    return objJson;
}

//Função que repõe o atributo quantidade que havia sido retirado caso o valor fosse 0
function corrigirQuantidades (objJson){
    for (let i = 0; i < objJson.length; i++){
        if (objJson[i].hasOwnProperty('quantity')===false){          
            objJson[i] = {
                id : objJson[i].id,
                name : objJson[i].name,
                quantity : 0,
                price : objJson[i].price,
                category : objJson[i].category
            }
        }
    }
    return objJson;
}

//Função que substitui os caracteres corrompidos para os caracteres corretos nos nomes
function corrigirNomes(objJson){
    for (let i = 0; i < objJson.length; i++){
        objJson[i].name = (objJson[i].name).replace(/æ/gi,"a");
        objJson[i].name = (objJson[i].name).replace(/¢/gi,"c");
        objJson[i].name = (objJson[i].name).replace(/ø/gi,"o");
        objJson[i].name = (objJson[i].name).replace(/ß/gi,"b");
    }
    return objJson;
}

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

//função que calcula o valor total do estoque de cada categoria
function valorTotalEstoque(produtos){
    //arrays auxiliares recebem os produtos de suas respectivas categorias
    var listaAcc = produtos[0];
    var listaEletrodo = produtos[1];
    var listaEletroni = produtos [2];
    var listaPan = produtos[3];
    
    var totalAcc = 0;
    var totalEletrodo = 0;
    var totalEletroni = 0;
    var totalPan = 0;
    var totalProdutos = [];

    for (var i = 0; i < listaAcc.length; i++){
        totalAcc += listaAcc[i].quantity * listaAcc[i].price;
    }
    
    for (var i = 0; i < listaEletrodo.length; i++){
        totalEletrodo += listaEletrodo[i].quantity * listaEletrodo[i].price;
    }
    
    for (var i = 0; i < listaEletroni.length; i++){
        totalEletroni += listaEletroni[i].quantity * listaEletroni[i].price;
    }
    
    for (var i = 0; i < listaPan.length; i++){
        totalPan += listaPan[i].quantity * listaPan[i].price;
    }
    
    totalProdutos = [
        "Preço total de Acessórios: " + totalAcc, "Preço total de Eletrodomésticos: " + 
        totalEletrodo, "Preço total de Eletrônicos: " + totalEletroni, "Preço total de Panelas: " + totalPan
    ];

    console.log(totalProdutos);
    return totalProdutos;
}

corrigirNomes(objJson);
converterPrecos(objJson);
corrigirQuantidades(objJson);

imprimirListaNomes(objJson);
valorTotalEstoque(imprimirListaNomes(objJson));

//retorna o objeto a formatação JSON
JSON.stringify(objJson);

