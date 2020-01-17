var Person = function() {};

Person.prototype.eyes = 2;

var p = new Person('kim');

console.dir(Person)
console.dir(p)
console.dir(Person.prototype.eyes); // 2
console.dir(p.eyes); // 2

var foo = {};

console.dir(foo);
