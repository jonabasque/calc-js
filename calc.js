var Utils = require("./lib/utils");

module.exports = Calc;

function Calc() {
  this.utils = new Utils();
    //TODO: poder instanciar el objeto de manera que parsee los operandos.
    //this.parse = true;
}

Calc.prototype.sum = function(nums, num){
  console.log(num);
  //var num2 = num || null;
	var result = nums[0];
  console.log(nums);
  console.log(typeof nums == 'object');
	if(typeof nums == 'object'){
    console.log("array!!!");
    for (var i = 1; i < nums.length; i++) {
      console.log(nums[i]);
      var sum2 = this.utils.parseNum(nums[i]);
      console.log(sum2);
      result = this.utils.round(result + sum2);
      console.log(result);
    }
	}else{
		result = this.utils.round(this.utils.parseNum(nums) + this.utils.parseNum(num));
	}
  return result;
}
