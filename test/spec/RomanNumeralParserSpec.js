"use strict";

describe("Should parse arabic numbers to Roman Numerals", function() {

    var parseAndCheckResult = function(parseArabicNumber, expectedResult) {
        var romanNumeralParser = new RomanNumeralParser();
        var romanNumeral = romanNumeralParser.parse(parseArabicNumber);
        return function () {
            expect(romanNumeral).toEqual(expectedResult);
        }
    };

    it("should parse 1 to I", parseAndCheckResult(1, "I"));
    it("should parse 10 to X", parseAndCheckResult(10, "X"));
    it("should parse 50 to L", parseAndCheckResult(50, "L"));
    it("should parse 100 to C", parseAndCheckResult(100, "C"));
    it("should parse 500 to D", parseAndCheckResult(500, "D"));
    it("should parse 1000 to M", parseAndCheckResult(1000, "M"));
    
});