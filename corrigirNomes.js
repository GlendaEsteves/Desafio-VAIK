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