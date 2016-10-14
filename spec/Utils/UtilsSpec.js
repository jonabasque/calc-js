describe("Utils", function() {
  var Utils = require('../../lib/utils');
  console.log(Utils);
  var utils;

  beforeEach(function() {
    utils = new Utils();
    utilsMockData = {
      num  : "5.2",
      num2 : "10.4"
    }
    console.log(typeof utils.parse(utilsMockData.num));
  });

  it("'parse(num)' devuelve lo esperado", function(){
    expect(utils.parse(utilsMockData.num)).toEqual(5.2);
  });
});
