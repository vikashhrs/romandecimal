var convertRomanToDecimal = require('./module_roman_to_decimal');
var convertDecimalToRoman = require('./module_decimal_to_roman');

var checkOperation = module.exports.getResults = function(romanOperandOne,operator,romanOperandTwo){

	var decimalOperandOne = convertRomanToDecimal.romanToDecimal(romanOperandOne);
	console.log("decimalOperandOne="+decimalOperandOne)
	var decimalOperandTwo = convertRomanToDecimal.romanToDecimal(romanOperandTwo);
	var resultInDecimal = 0;
	console.log("decimalOperandTwo="+decimalOperandTwo)
	
	if(operator == "/"){
		resultInDecimal = parseInt(decimalOperandOne / decimalOperandTwo);
		console.log(resultInDecimal);
		return convertDecimalToRoman.decimalToRoman(resultInDecimal)

	}else if(operator == "+"){

		resultInDecimal = parseInt(decimalOperandOne + decimalOperandTwo);
		console.log(resultInDecimal);
		return convertDecimalToRoman.decimalToRoman(resultInDecimal)

	}else if(operator == "-"){

		resultInDecimal = parseInt(decimalOperandOne - decimalOperandTwo);
		console.log(resultInDecimal);
		return convertDecimalToRoman.decimalToRoman(resultInDecimal)

	}else if(operator == "*"){

		resultInDecimal = parseInt(decimalOperandOne * decimalOperandTwo);
		console.log(resultInDecimal);
		return convertDecimalToRoman.decimalToRoman(resultInDecimal)

	}else{
		return "Invalid Operator";
	}

}

if(process.argv.length == 5){
	argv = process.argv;
	console.log(argv);
	console.log(checkOperation(argv[2],argv[3],argv[4]));
}

console.log(checkOperation("XX","/","V"));