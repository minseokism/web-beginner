/*
 2016-01-09 weak1 homework
 2. 아래와 같이 입력한 숫자의 각 자릿수의 총합을 구하는 프로그램을 작성해주세요.
 -  예를 들어, 54321을 입력한다면 5+4+3+2+1 = 15 이므로 출력은 15가 되어야 합니다.
 -	다만 배열 및 String을 활용한 방법은 사용할 수 없습니다. 
 -  예시) sumLineNum(54321);
 -       sumLineNum(543); 
 -       
 -       각 자릿수의 총합 : 15
 -       각 자릿수의 총합 : 12
 */

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
