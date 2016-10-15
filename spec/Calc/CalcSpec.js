describe("Calc", function() {
  var Calc = require('../../calc');
  console.log(Calc);
  var calc;
  var nums = [5, "5,2", "4.2", "5.2R", true, {}];

  beforeEach(function() {
    calc = new Calc();
    calcMockData = {
      nums  : [5, "5,2", "4.2", "5.2R", true, {}],
      num1  : 12,
      num2  : 10
    }
  });

  it("'plus()' devuelva lo esperado", function(){
    expect(calc.sum(nums)).toEqual(19.6);
  });

});
