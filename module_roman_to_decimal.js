var checkRomanToDecimal = module.exports.romanToDecimal = function(roman){
 
 	var decimalEquivalent = 0;
    for (var i=0; i<roman.length; i++)
    {
        var currentCharValue = checkValueOfRomanChar(roman.charAt(i));
 
        if (i+1 < roman.length)
        {
            var nextCharValue = checkValueOfRomanChar(roman.charAt(i+1));

            if (currentCharValue >= nextCharValue)
            {
                decimalEquivalent = decimalEquivalent + currentCharValue;
            }
            else
            {
                decimalEquivalent = decimalEquivalent + nextCharValue - currentCharValue;
                i++;
            }
        }
        else
        {
            decimalEquivalent = decimalEquivalent + currentCharValue;
            i++;
        }
    }
    return decimalEquivalent;
}

var checkValueOfRomanChar = module.exports.getValueForRomanChar = function (romanCharacter){

	if (romanCharacter == 'I')
        return 1;
    if (romanCharacter == 'V')
        return 5;
    if (romanCharacter == 'X')
        return 10;
    if (romanCharacter == 'L')
        return 50;
    if (romanCharacter == 'C')
        return 100;
    if (romanCharacter == 'D')
        return 500;
    if (romanCharacter == 'M')
        return 1000;
 
    return -1;
}


if(process.argv.length == 3){
	argv = process.argv;
	console.log(argv);
	console.log(checkRomanToDecimal(argv[2]));
}
console.log(checkRomanToDecimal("CCL"));

