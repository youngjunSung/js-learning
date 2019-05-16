// Run by Node.js
// 반복문의 for, for in, while문을 이용하여 10부터 1까지 역순으로 출력하는 프로그램을 만들어봅시다.
// 출력은 console.log 이용하기
// var i = 10;
// var n = 10;
// var j = 10;
// var k = 10;
// console.log('for문');
// for (i; i>0; i--) {
// 	console.log(i)
// }
// console.log('while문');
// while (j>1) {
// 	j--;
// 	console.log(j);
// }
// console.log('while do문');
// do {
// 	k--;
// 	console.log(k);
// } while (k>1)

// class SoccerPlayer {
//   constructor() { }
// }

// var park = new SoccerPlayer({
//   name: 'ji-sung',
//   age: 35,
//   height: 120,
//   weight: 20,
//   position: 'mid',
//   team: 'riverpoor'
// });

// 첫 글자가 대문자인 경우 객체로 선언됐음을 알려준다.
// 이 객체로 아래의 원형(prototype) 표기법 새로운 객체를 생성할 수 있다.
// var SoccerPlayer = function (){};


// SoccerPlayer.prototype = {
//   name: String,
//   age: Number,
//   height: Number,
//   weight: Number,
//   position: String,
//   team: String
// };



// var park = new SoccerPlayer();
// park.age = 34;
// console.log(park.age);

// var son = new SoccerPlayer();
// son.height = 181;
// console.log(son.height);

// 상속

function Man (){
  this.name = 'annonymous';
  this.gender = 'man';
  this.Run = function (){
    return this.name + 'is running';
  }
  this.Sleep = function (){
    return this.name + 'is sleeping';
  }
}

function SoccerPlayer (){
  // this.base = new Man();
  this.name = 'Anonymous Soccer Player';
  this.Run = function (){
    return this.base.Run();
  }
  this.Pass = function (){
    return this.name + 'is passing to other player!'
  }
}


// SoccerPlayer.prototype = new Man();
SoccerPlayer.prototype.address = 'korea';
SoccerPlayer.__proto__.address = 'korea';
var Player = new SoccerPlayer();

console.dir(Man);
console.dir(SoccerPlayer);
console.dir(Player);
console.dir(Player.address);
console.dir(Player.gender);

// console.log(Player.gender);
// console.log(Player.name);
// console.log(SoccerPlayer.name);
// console.dir(SoccerPlayer);
// console.dir(Player);
// console.dir(SoccerPlayer.prototype);
// console.dir(SoccerPlayer.prototype.name);


// function Person(){
//   this.name = name;
// }
// console.dir(Person);


// var Kim = new Person ();
// console.dir(Kim);

// Kim.name = 'JungEun';
// console.dir(Kim.name);

function Person () {
  this.eyes = 2;
  this.nose = 1;
}

var kim = new Person();
var park = new Person();

console.dir(Person);
console.dir(kim);

console.log(kim.eyes);
console.log(kim.nose);

console.log(park.eyes);
console.log(park.nose);

function Person2 (name) {
  // this.name = name;
  // this.prototype.mouse = 1;
}

Person2.prototype.eyes = 2;
Person2.prototype.nose = 1;
Person2.prototype.getType = function () {
  alert('human');
}

var sung = new Person2(sung);
var choi = new Person2();
choi.getType = function () {
  alert('인간');
}

sung.getType();
choi.getType();

console.dir(Person2);
console.dir(sung);
console.dir(choi);

console.log(sung.eyes);
console.log(sung.nose);

console.log(choi.eyes);
console.log(choi.nose);

console.dir(sung);

var aaa = [1,2,{a:3}];
aaa.asdfasdf = {
  name: 'son',
  age: 20,
}
// aaa.prototype.name = 'son';
// aaa.__proto__ = null;

console.dir(aaa);
console.dir(aaa.asdfasdf);
console.dir(aaa.__proto__);


