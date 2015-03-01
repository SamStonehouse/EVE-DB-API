var Mask = require('../lib/mask/mask.js');

var mask = new Mask();

mask.addValue("test1");
mask.addValue("test2");
mask.addValue("test3");

var test1Mask = mask.getMaskForValue("test1");
var test2Mask = mask.getMaskForValue("test2");
var test3Mask = mask.getMaskForValue("test3");
var test4Mask = mask.getMaskForValue("test4");

var t13Masks = test1Mask + test3Mask;
var t123Mask = test1Mask + test2Mask + test3Mask;

describe ("Mask handler", function(){
	it("should return the correct masks", function(done) {
		expect(test1Mask).toBe(Math.pow(2, 0));
		expect(test2Mask).toBe(Math.pow(2, 1));
		expect(test3Mask).toBe(Math.pow(2, 2));
		expect(test4Mask).toBe(undefined);

		done();
	});

	it("should return the correct number of values for each mask", function(done) {
			expect(mask.checkMask(test1Mask).length).toBe(1);
			expect(mask.checkMask(test2Mask).length).toBe(1);
			expect(mask.checkMask(test4Mask).length).toBe(0);
			done();
	});


	it("should return the correct value for the given masks", function(done) {
			//console.log(mask.checkMask(t13Masks).length)

			expect(mask.checkMask(test3Mask)[0]).toBe("test3");
			expect(mask.checkMask(t13Masks)[0]).toBe("test1");
			expect(mask.checkMask(t13Masks)[1]).toBe("test3");

			expect(mask.checkMask(t13Masks).length).toBe(2);
			expect(mask.checkMask(t123Mask).length).toBe(3);
			done();
	});
});
