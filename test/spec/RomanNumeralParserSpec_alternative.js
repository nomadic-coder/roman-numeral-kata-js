/*
 Uses alternative implementation using constructor function pattern
 */

"use strict";

var parseAndCheckResult = function(arabic, expectedResult) {
    var parser = new RomanNumeralParser();
    var romanNumeral = parser.parse(arabic);
    
    return function () {
        expect(romanNumeral).toEqual(expectedResult);
    }
};

describe("Should reject arabic numbers outside acceptable range: ", function() {
    it("should reject numbers less than 1", function() {
        var parser = new RomanNumeralParser();
        expect(function() { parser.parse(0); }).
            toThrow(new RangeError("Number should be greater than 0"));
    });
  
    it("should reject numbers greater than 3000", function() {
        var parser = new RomanNumeralParser();
        expect(function () { parser.parse(3001);}).
            toThrow(new RangeError("Number should be less than 3001"));
    });
});

describe("Should parse arabic numbers to single digit Roman Numerals: ", function() {
    it("should parse 1 to I", parseAndCheckResult(1, "I"));
    it("should parse 10 to X", parseAndCheckResult(10, "X"));
    it("should parse 50 to L", parseAndCheckResult(50, "L"));
    it("should parse 100 to C", parseAndCheckResult(100, "C"));
    it("should parse 500 to D", parseAndCheckResult(500, "D"));
    it("should parse 1000 to M", parseAndCheckResult(1000, "M"));
});

describe("Should parse arabic numbers for repeating numerals: ", function() {
    it("should parse 2 to II", parseAndCheckResult(2, "II"));
    it("should parse 3 to III", parseAndCheckResult(3, "III"));
    it("should parse 20 to XX", parseAndCheckResult(20, "XX"));
    it("should parse 3000 to MMM", parseAndCheckResult(3000, "MMM"));
});

describe("Should parse arabic numbers to multiple digit Roman Numerals: ", function() {
    it("should parse 3 to III", parseAndCheckResult(3, "III"));
    it("should parse 8 to VIII", parseAndCheckResult(8, "VIII"));
    it("should parse 550 to DL", parseAndCheckResult(550, "DL"));
    it("should parse 552 to DLII", parseAndCheckResult(552, "DLII"));
    it("should parse 256 to CCLVI", parseAndCheckResult(256, "CCLVI"));
    it("should parse 1105 to MCV", parseAndCheckResult(1105, "MCV"));
});

describe("Should parse arabic numbers requiring subtration numerals: ", function() {
    it("should parse 4 to IV", parseAndCheckResult(4, "IV"));
    it("should parse 9 to IX", parseAndCheckResult(9, "IX"));
    it("should parse 40 to XL", parseAndCheckResult(40, "XL"));
    it("should parse 1004 to MIV", parseAndCheckResult(1004, "MIV"));
    it("should parse 34 to XXXIV", parseAndCheckResult(34, "XXXIV"));
    it("should parse 124 to CXXIV", parseAndCheckResult(124, "CXXIV"));
    it("should parse 290 to CCXC", parseAndCheckResult(290, "CCXC"));
    it("should parse 1969 to MCMLXIX", parseAndCheckResult(1969, "MCMLXIX"))
});
