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