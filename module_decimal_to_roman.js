var check = module.exports.decimalToRoman = function(decimalValue){

		var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
	
		
		var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		
		
		var copyOfInputNumber = decimalValue;
		
		var romanEquivalent = "";
	
		if (decimalValue >= 1 && decimalValue <= 3999)
		{
			for (var i = 0; i < decimals.length; i++) 
			{
				while(decimalValue >= decimals[i])
				{
					decimalValue = decimalValue - decimals[i];
					
					romanEquivalent = romanEquivalent + romanSymbols[i];
				}
			}
			
			return(romanEquivalent);
		}
		else
		{
			return("Invalid Number");
		}
}

if(process.argv.length == 3){
	argv = process.argv;
	console.log(argv);
	console.log(check(argv[2]));
}
console.log(check(250));