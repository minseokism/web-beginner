function sumLineNum(input){

	var hap=0;
	var value=0;

	while(!input==0){
		value=input%10;
		hap+=value;
		input=parseInt(input/10);
	}

	console.log(hap);
}

sumLineNum(54321);
sumLineNum(543);
