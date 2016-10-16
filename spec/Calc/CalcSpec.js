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
      num2  : 10,
      num3  :  3
    }
  });

  it("'plus()' devuelva lo esperado", function(){
    expect(calc.plus(nums)).toEqual(19.6);
    expect(calc.plus(calcMockData.num1, calcMockData.num2)).toEqual(22);
  });

  it("'minus()'devuelva lo esperado", function(){
    console.log("num1 desde expect: "+ calcMockData.num1);
    expect(calc.minus(calcMockData.num1, calcMockData.num2)).toEqual(2);
    expect(calc.minus(calcMockData.num1, calcMockData.nums)).toEqual(NaN);
  });

  it("'times()' devuelva lo esperado", function(){
    expect(calc.times(nums)).toEqual(567.84);
    expect(calc.times(calcMockData.num1, calcMockData.num2)).toEqual(120);
  });

  it("'tdivided()' devuelva lo esperado", function(){
    expect(calc.divided(calcMockData.num1, calcMockData.num3)).toEqual(4);
    expect(calc.divided(calcMockData.num1, calcMockData.num2)).toEqual(1.2);
  });

});
