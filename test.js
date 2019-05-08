// Run by Node.js
// 반복문의 for, for in, while문을 이용하여 10부터 1까지 역순으로 출력하는 프로그램을 만들어봅시다.
// 출력은 console.log 이용하기
var i = 10;
var n = 10;
var j = 10;
var k = 10;
console.log('for문');
for (i; i>0; i--) {
	console.log(i)
}
console.log('while문');
while (j>1) {
	j--;
	console.log(j);
}
console.log('while do문');
do {
	k--;
	console.log(k);
} while (k>1)

// class SoccerPlayer {
//   constructor() { }
// }
var SoccerPlayer = function (){};
SoccerPlayer.prototype = {
  name: String,
  age: Number,
  height: Number,
  weight: Number,
  position: String,
  team: String
};

// var park = new SoccerPlayer({
//   name: 'ji-sung',
//   age: 35,
//   height: 120,
//   weight: 20,
//   position: 'mid',
//   team: 'riverpoor'
// });

var park = new SoccerPlayer();

park.age = 34;

console.log(park.age);

