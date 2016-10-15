describe("Utils", function() {
  var Utils = require('../../lib/utils');
  console.log(Utils);
  var utils;

  beforeEach(function() {
    utils = new Utils();
    utilsMockData = {
      num  : "5.2",
      num2 : "10.4",
      numQuotes : "4,2",
      num3 : true,
      num4 : {}
    }
    //console.log(typeof utils.parseNum(utilsMockData.num));
  });

  it("'parse(num)' devuelve lo esperado", function(){
    expect(utils.parseNum(utilsMockData.num3)).toBeLessThan(1);
    expect(utils.parseNum(utilsMockData.num3)).toBeGreaterThan(-1);
    expect(utils.parseNum(utilsMockData.num4)).toEqual(0);
    expect(utils.parseNum(utilsMockData.numQuotes)).toEqual(4.2);
    expect(utils.parseNum(utilsMockData.num)).toEqual(5.2);
  });

});
