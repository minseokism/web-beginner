 var obj={};
obj.name="이민석";
obj.age=10;
obj.add="seoul";
obj.sex="male";
obj.job=false;

for(var j in obj){
	console.log(j+" : "+obj[j]);
}

/////////////////

Object.prototype.name='jjj';

for(var k in obj){
	if(obj.hasOwnProperty){ // 프로토타입에서 만든 객체들 말고 본인이 만든 객체만 뽑아낼떄사용 

	}
}
