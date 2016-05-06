"use strict";

var RomanNumeral = function(arabic, numeral) {
    this.arabic = arabic;
    this.numeral = numeral;
};

var romanNumerals = [
    new RomanNumeral(1, "I"),
    new RomanNumeral(4, "IV"),
    new RomanNumeral(5, "V"),
    new RomanNumeral(9, "IX"),
    new RomanNumeral(10, "X"),
    new RomanNumeral(40, "XL"),
    new RomanNumeral(50, "L"),
    new RomanNumeral(90, "XC"),
    new RomanNumeral(100, "C"),
    new RomanNumeral(400, "CD"),
    new RomanNumeral(500, "D"),
    new RomanNumeral(900, "CM"),
    new RomanNumeral(1000, "M")
];

var RomanNumeralParser = function() {
    
    RomanNumeralParser.prototype.parse = function(arabic) {
        RomanNumeralParser.prototype.validateArabic(arabic);
        
        var parsedNumeral = "";
        
        var nextNumeral = RomanNumeralParser.prototype.getNextNumeral(arabic);
        parsedNumeral += nextNumeral.numeral;
        var remainder = arabic - nextNumeral.arabic;
        if (remainder > 0) {
            parsedNumeral += RomanNumeralParser.prototype.parse(remainder);
        }
        
        return parsedNumeral;
    };
    
    RomanNumeralParser.prototype.getNextNumeral = function(arabic) {
        return romanNumerals.
            sort(function(lhs, rhs) { return rhs.arabic - lhs.arabic; }).
            filter(function(romanNumeral) { return arabic >= romanNumeral.arabic; })[0];
    }
    
    RomanNumeralParser.prototype.validateArabic = function(arabic) {
        if (arabic < 1) {
            throw new RangeError("Number should be greater than 0");
        }
        
        if (arabic > 3000) {
            throw new RangeError("Number should be less than 3001");
        }
    }
};
