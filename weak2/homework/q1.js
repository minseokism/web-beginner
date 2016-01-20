/*
 2016-01-16 weak2 homework
 1. 아래와 같이 입력 받은 범위 내에서 미중복 랜덤 숫자를 출력시키는 프로그램을 작성하세요.
 -  입력 받는 숫자는 2개입니다 (범위, 개수)
 -  중복된 숫자는 출력되면 안됩니다.
 -  Math.random 함수를 사용합니다. 
 -  시간복잡도 제한은 n^2 이며, 문제를 풀게되면 n으로 할 수 있는 방법을 찾아보세요.
 -  예시)  getRandomNum(20,5);
 -        
 -       20개의 숫자중 랜덤한 숫자 5개는
 -       14
 -       2
 -       1
 -       6
 -       5
 */

function getRandomNum(x,y) {
	var outputArray = [y];  								// random한 수를 받을 배열 생성
	var count  = 0;
	var output = "20개의 숫자중 랜덤한 숫자 5개는 ";
	for(var i = 0 ; i < y ; i++) {					 
		outputArray[i]=Math.floor(Math.random()*x+1); 	// random()함수를 통해 1~x 까지의 범위의 랜덤한 정수를 구한다.    
		output+="\n"+outputArray[i];            
	}


	return output;
};

console.log(getRandomNum(20,5));
