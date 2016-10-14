describe("Calc", function() {
  var Calc = require('../../calc');
  console.log(Calc);
  var calc;

  beforeEach(function() {
    calc = new Calc();
    calcMockData = {
      num  : 5,
      num2 : 10
    }
  });
/*
  it("'_parse()' devuelva lo esperado", function(){
    expect(calc.parse(calcMockData.num, calcMockData.num2)).toEqual()
  });
*/
});
