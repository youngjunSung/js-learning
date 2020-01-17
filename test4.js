var num = 1;

function foo() {
  var num = 2;

  function bar() {
    console.log(num);
  }
  return bar;
}

var baz = foo();
baz();


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduction = function () {
    return this.name + ' ' + this.age;
  }
  console.log(this.age);
  return Person;
}
Person.prototype.name = 'aaa'
console.dir(Person);
var p1 = new Person('egoing',77);
p1.name = 'asdf'
console.dir(p1);
var p2 = new p1('egoing',77);
console.dir(p2);