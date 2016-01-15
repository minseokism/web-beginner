function makeDiamond (input) {

	var column;
	for (var i = 0 ; i < input; i++) {
		column="";		
		for(var j = input-2 ; j >= i ; j--){
			column=column+" ";		
		}
		for(var k = input-i ; k <= input ; k++){
			column=column+"*";	
		}
		for(var p = 0 ; p<i ; p++){
			column=column+"*";
		}
		console.log(column);
	}

	for (var i = 0 ; i < input-1; i++) {
		column=""; 
		for(var j=0 ; j <= i ; j++){
			column=column+" ";
		}
		for(var k=i ; k < input-1 ; k++){
			column=column+"*";
		}
		for(var p=i ; p < input-2 ; p++){
			column=column+"*";
		}

		console.log(column);
	}
};

makeDiamond(5);