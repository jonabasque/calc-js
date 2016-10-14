describe("Calc", function() {
  var Calc = require('../../calc');
  console.log(Calc);
  var calc;

  beforeEach(function() {
    calc = new Calc();
  });

  it("'calc' sea igual al prototipo", function(){
    expect(calc).toEqual(Calc.prototype);
  });


});
