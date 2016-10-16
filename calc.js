var Utils = require("./lib/utils");

module.exports = Calc;

function Calc() {
  this.utils = new Utils();
    //TODO: poder instanciar el objeto de manera que parsee los operandos.
    //this.parse = true;
}

Calc.prototype.plus = function(op1, op2){
  console.log(op2);
  //var num2 = num || null;
  console.log(op1);
  console.log(typeof op1 == 'object');
  if(typeof op1 == 'object'){
    var result = op1[0];
    console.log("array!!!");
    for (var i = 1; i < op1.length; i++) {
      console.log(op1[i]);
      var num1 = this.utils.parseNum(op1[i], true);
      console.log(op2);
      result = this.utils.round(result + num1);
      console.log(result);
    }
  }else if(typeof op1 == 'number' && typeof op2 == 'number'){
    result = this.utils.round(this.utils.parseNum(op1) + this.utils.parseNum(op2));
  }
  return result;
}

Calc.prototype.minus = function(op1, op2){
  console.log(op1);//minuendo
  console.log(op2); //substraendo
  var num1 = this.utils.parseNum(op1);
  var num2 = this.utils.parseNum(op2);
  console.log(num1);//minuendo
  console.log(num2); //substraendo
	if(Number.isNaN(num1) || Number.isNaN(num2)){
		return NaN;
	}else{
    return this.utils.round(this.utils.parseNum(num1) - this.utils.parseNum(num2));
  }
}
