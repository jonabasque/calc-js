module.exports = Utils;

function Utils() {
}

Utils.prototype.parseNum = function(operator){
  //console.log(operator);
  //console.log(typeof operator);
  if(typeof operator == 'number'){
    return operator;
  }
  //Si es un string
  if(typeof operator == 'string'){
    operator = operator.replace(",",".");
    operator = parseFloat(operator);
    console.log("Es string");
    //TODO:Podría devolver NaN si pasan una cadena no convertible a float
    //lo cual es correcto, por que no nos habrían pasado un número valido.
    return operator;
  }
  //Si no es estring y tampoco es number
  if(typeof operator != 'number'){
    console.log("No es string y No es number");
    operator = 0;
    //console.log("Solo si no es String ni Number!!!" + operator);
    return operator;
  }

}

Utils.prototype.round = function(num){
  //redondea a 1 ó 2 decimanes como mucho.
  num = Math.round(num * 100) / 100;
  return num;
}
