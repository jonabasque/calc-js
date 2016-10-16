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
      num4 : {},
      num5 : 4.5688888888,
      num6 : 5,
      num7 : []
    }
    //console.log(typeof utils.parseNum(utilsMockData.num));
  });

  it("'parse(num)' devuelve lo esperado", function(){
    expect(utils.parseNum(utilsMockData.num6)).toEqual(5);
    expect(utils.parseNum(utilsMockData.num7)).toEqual(NaN);
    expect(utils.parseNum(utilsMockData.num3, true)).toBeLessThan(1);
    expect(utils.parseNum(utilsMockData.num3, true)).toBeGreaterThan(-1);
    expect(utils.parseNum(utilsMockData.num4, true)).toEqual(0);
    expect(utils.parseNum(utilsMockData.numQuotes)).toEqual(4.2);
    expect(utils.parseNum(utilsMockData.num)).toEqual(5.2);
  });

  it("'round()' devuelve lo esperado", function(){
    expect(utils.round(utilsMockData.num5)).toEqual(4.57);
    expect(utils.round(utilsMockData.num6)).toEqual(5);
  });


});
