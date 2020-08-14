//Função que converte todos os preços para o tipo número
function converterPrecos (objJson){

    for (let i = 0; i < objJson.length; i++){
        objJson[i].price = Number(objJson[i].price).toFixed(2);
        objJson[i].price = Number(objJson[i].price);
    }
    return objJson;
}