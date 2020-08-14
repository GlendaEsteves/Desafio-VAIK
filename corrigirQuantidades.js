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