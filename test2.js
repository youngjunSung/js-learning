function Ultra (){
  this.height = 9;
};
Ultra.prototype.name = 'jay';
Ultra.prototype.birth = 1991;

function Super (){
  this.width = 15;
};
Super.prototype = new Ultra(); //Ultra 생성자를 상속 받는다. 그리고 그 생성자 Ultra의 프로토타입을 참조한다.
// Super.prototype.age = 15;

function Sub (){
  this.gender = 'man';
};
Sub.prototype = new Super();
// Sub.prototype.price = 100;

var o = new Sub();

console.dir(Window);
console.dir(Ultra);
console.dir(Super);
console.dir(Sub);
console.dir(Ultra.prototype);
console.dir(Super.prototype);
console.dir(Sub.prototype);
console.dir(o);
console.dir(Sub);

function SoccerPlayer(name, position) { 
  this.name = name;
  this.position = position; 
  this.whatIsYourName = function () {
    return "My name is " + this.name;
  };
  this.whatIsYourPosition = function () { 
	return "My position is " + this.position;
}; }

var player = new SoccerPlayer("Park Ji Sung", "Wing Forward");

// console.dir(SoccerPlayer);
// console.dir(player);
// console.dir(player.whatIsYourName());
// console.dir(player.whatIsYourPosition());
function strictMode() {
  // 'use strict'
  return this
}
const caller = {
  f: function() {
    alert(this)
  },
}   

console.log(strictMode()) // undefined
alert.age = '322' 
// console.log(alert(this));
// alert(this); 
// console.log(caller.f());

var Person = function() {
  this.name = "kim";
};

var p = new Person('kim');
console.log(p.name); //error 발생
console.log(window.name); //kim 출력된다.
console.dir(window.name); //kim 출력된다.