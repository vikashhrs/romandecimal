var assert = require('assert');
var convertRomanToDecimal = require('./../module_roman_to_decimal');
var convertDecimalToRoman = require('./../module_decimal_to_roman');
var arithematicOperations = require('./../module_arithematic_operations');

describe('Test Roman Deciamal Module', function() {
  describe('#testing module_roman_to_decimal', function() {
    it('should return -1 when E is given as roman char', function() {
      assert.equal(convertRomanToDecimal.getValueForRomanChar("E"),-1);
    });

	it('should return 50 when L is given as roman char', function() {
      assert.equal(convertRomanToDecimal.getValueForRomanChar("L"),50);
    });

  });

  describe('#testing module_decimal_to_roman', function() {
    it('should return XII when the 12 is given as decimal value', function() {
      assert.equal(convertDecimalToRoman.decimalToRoman(12), "XII");
    });

    it('should return Invalid Number more that or equal to 4000 is given', function() {
      assert.equal(convertDecimalToRoman.decimalToRoman(50000), "Invalid Number");
    });

  });

  describe('#testing module_arithematic_operations', function() {
    
    it('should return XII when V and VII are given for addition', function() {
      assert.equal(arithematicOperations.getResults("V","+","VII"), "XII");
    });

    it('should return Invalid Operator when any other symbol except {-,*,/,-} is provided', function() {
      assert.equal(arithematicOperations.getResults("V","$","VII"), "Invalid Operator");
    });



  });
});
