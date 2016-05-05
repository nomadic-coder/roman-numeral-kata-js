
var RomanNumeral = function(arabic, numeral) {
    this.arabic = arabic;
    this.numeral = numeral;
};

var romanNumerals = [
    new RomanNumeral(1, "I"),
    new RomanNumeral(5, "V"),
    new RomanNumeral(10, "X"),
    new RomanNumeral(50, "L"),
    new RomanNumeral(100, "C"),
    new RomanNumeral(500, "D"),
    new RomanNumeral(1000, "M")
];

var RomanNumeralParser = function() {
    
    RomanNumeralParser.prototype.parse = function(arabic) {
        var romanNumeral = romanNumerals.find (
            function (r) { return r.arabic === arabic; }
        );
        return romanNumeral.numeral;
    };
};
