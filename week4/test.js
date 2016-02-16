/*자바스크립트의 1급객체
함수 ( function )

자바의 1급객체 or 1급시민
객체(object)

-----------------------------------
*/

/*function show(sum){
	var n=5, m=10;
	sum().sum(n,m);
}

show(function(){
	return {
		sum : function(n, m){
			console.log(n+m);
		}
	}
});*/

////////////////////////////////////
var add= function(){                     //더글라스 ?? 이방법 선호함  but 회사마다 다르다

}

function add(){

}

///////////////////////////////////// 콜백 패턴 - 데이터를 받고 나서 처리하고싶을떄? 
/*function  show(calculator,n,m){
	var result=calculator();
	console.log('결과는 : '+result);
}

show(function(n,m){
	return n+m+2},5,10);
*/

var arr1=[10,21,3,14,5];
arr1.sort(function(a,b){
	return a-b;
});

console.log(arr1);