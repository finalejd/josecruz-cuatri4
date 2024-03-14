
console.log(" Hola Mundo")
let message = "Hello World";
console.log(message);

var n = 100
var n1 = 21.50
console.log(n)
console.log(n1 + n)

const pi = 3.1416
console.log(num * pi)

/////////////////////////////////////////////////////////////////

var name = "John"
var admin = name;

console.log(admin)

/////////////////////////////////////////////////////////////////


for (let i = 0; i < 10; i++) {
  console.log(i)
}

/////////////////////////////////////////////////////////////////


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < array.length; i++) {
  console.log(array(i))

}
/////////////////////////////////////////////////////////////////


for (let i = array; i >= array.length; i--) {
  console.log(array(i))

}

for (let i of array) {
  console.log(i)
}
/////////////////////////////////////////////////////////////////

const string = "foo bar";
for (any of string) {
  console.log(any)
}
/*
const names = ['John', 'Wick', 'Donald', 'Trump', 'Albert'];

const uniqueNames = new set (names);

for(let name of uniqueNames) {
    console.log(name)
}

*/

const obj = {

  name: "Foo bar",
  age: 23,
  city: "TJ"
}

console.log(obj)

for (let key of Object.keys(obj)) {
  console.log(key + ": " + obj[key])
}
console.log("")

for (let key in obj) {

  console.log(key + ": " + obj[key])
}


//-------------------While-------------------// 

var i = 0
while (i < 1000) {

  console.log(i)

  i += 5
}

do {
  console.log(i)

  i += 5

} while (i < 1000)


//-------------------if-------------------// 

var animal = "Bear"
if (animal == "Bear") {
  console.log("yes, is pretty kitty")

} else {

  console.log("no, is not pretty kitty")

}


var cat = (animal === "Dog") ? "Wow es un perrito" : "neeeeel, que es esooooooooooo"
console.log(cat)

//-------------------if-------------------// 


var clase = 1

switch (clase) {
  case 1:
    console.log("clase  1")
    break;

  case 2:
    console.log("clase 2")
    break;

  default:
    console.log(" no existe una clase")
    break;
}


var base = 30
var altura = 15

function area(base, altura) {
  return (base * altura) / 2

}

console.log("El area del Triangulo es: " + area(base, altura))




var l = 89
var w = 23
var h = 12

function prisma(l) {
  return function (w) {
    return function (h) {
      return l * w * h
    }
  }

}

console.log("El volumen del prisma es: " + prisma(l)(w)(h))



  (function () {

    console.log("SOY ANONIMOASSA")

  })();


const f = (function (msg) {

  console.log("I AM ANONIMOASSA" + msg)
  return msg

})("Foo");
console.log(f)





const fx = function sum(x, y) {
  return x + y
}
const fy = function (g, h) {
  return g + h
}

console.log("fx: " + fx(45, 221) + " and fy: " + fy(65, 89))


/*
var sumTwoNumbers = function sum (a, b){
  return a+ b;
 }
 sum (1, 3)


var say = function (times){
  if(times > 0){
    console.log("hello world")
    say(times-1)
  }
}

var sayHello = say;

sayHello(5)


*/

function personLogsSomeThings(person, ...msg) {
  msg.forEach(arg)

}


//-----------argumentos-----------//

const logArguments = (...args) => console.log(args)
const list = [1, 2, 3]

logArguments('a', 'b', 'c', ...list)


const loarg = (...args) => console.log(args)
const list = [1, 2, 3, 4]

logArguments("a", "b", "c", ...list)


function personSay(person, ...msg) {
  msg.forEach(arg => {
    console.log(person + "say : " + arg)
  })
}

personSay("Foo", "Hello", "World", "Mr.", "Long", "Johnsom")















