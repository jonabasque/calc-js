module.exports = Utils;

function Utils() {
}

Utils.prototype.parse = function(operator){
  operator = operator.replace(",",".");
  return Number(operator);
}
