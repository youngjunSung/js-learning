// 객체란 키와 값으로 구성된 프로퍼티들의 집합이다.
// 객체 생성 방법
// 1. 객체 생성한 후 값 할당하기
var obj1 = new Object();
obj1.name = 'jay';
obj1.age = 34;
obj1.introduction = function(){
  return this.name + ' ' + this.age;
}

console.dir(obj1);
console.dir(obj1.introduction());
// 2. 객체 생성과 할당을 동시에
var obj2 = {
  name: 'cai',
  age: 5,
  introduction: function(){
    return this.name + ' ' + this.age;
  }
}

console.dir(obj2);
console.dir(obj2.introduction());

// 여러 개의 객체 생성이 필요할 떄 중복을 피하기 위해
// 함수를 통해 생성자로 객체에 할당해준다

function Person (name, age){
  this.name = name;
  this.age = age;
  this.introduction = function (){
    return this.name + ' ' + this.age;
  }
}

// 이렇게 함수 앞에 new 가 있다면 객체를 리턴하는 생성자 함수가 된다.
// 일반 함수와 생성자 함수를 구분하기 위해 생성자 함수는 대분자로 시작한다.
// 생성자는 할당되는 변수를 초기화 해준다.
var sung = new Person('yj',34);

console.log(sung);
console.dir(sung.introduction());


var kim = new Person('gh',14);

console.dir(kim);
console.dir(kim.introduction());


var park = new Person('js',44);

console.dir(park);
console.dir(park.introduction());


// 스코프 체인 - 중첩된 함수 구조에서 내부 함수에서 변수를 참조할때
// 상위 스코프 함수로 올라가면서 계속 찾는다.
var a = 1;

function outer() {
	var b = 2;
	console.log(a); // 1
	
	function inner() {
		var c = 3;
		console.log(b);
		console.log(a); 
	}
	
	inner();  // 2 1
}
outer();

// console.log(c);  // c is not defined

var text = 'global';

function foo() {
	console.log(text);
}

function bar() {
	var text = 'bar';
	foo();
}

bar(); // 무엇이 출력될까요?
// foo 함수는 어디서 호출되든 상관 없이
// 무조건 자신의 스코프에서 먼저 찾고
// 이후 전역 스코프를 찾는다