// OOPS in Javascript

// To structure our code ->
// 1. Prototypes
// 2. New Operator
// 3. Constructors
// 4. Classes
// 5. Keywords(extends, super)

// Till now we have studied to create objects
// for an instance taking example of multiple students ->

// const stu1 = {
//   name: "abc",
//   age: 23,
//   marks: 91,
//   getmarks: function () {
//     return this.marks;
//   },
// };

// const stu2 = {
//   name: "def",
//   age: 27,
//   marks: 99,
//   getmarks: function () {
//     return this.marks;
//   },
// };

// const stu3 = {
//   name: "ghi",
//   age: 24,
//   marks: 96,
//   getmarks: function () {
//     return this.marks;
//   },
// };

// We can see keys are repeating here
// we know if we create even 10000s students the keys will be the same
// the function which we have created in every object gets created seperately in memory
// if we create 1000s students, we will have 1000s function in memory which is inefficient way
// in programming, we should not repeat the same code repeatedly, inefficient way of programming

// To remove this inefficiency, we have oops
// take example of car, every car which is made is made using an earlier blueprint made by designer
// Similarly in programming, prepare a blueprint and we can make multiple objects with that

// using ooops means we are connecting programming with real world

// Object Prototypes : Prototypes are the mechanism by which JavaScript objects inherit features from one another
// It is like a single template object that all objects inherit methods and properties from without having their own copy

// array.__proto__ (reference)
// Array.prototype (actual Object)
// String.prototype

// Internally, array is also a js object

// whenever we print an array in console, there is always prototype which has various functions
// whenever we create an array, it inherits the properties such as function and properties
// every array we create in js always have builtin property which is called prototype

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr1.sayHello = () => {
//   console.log("Hello! i am arr1");
// };

// arr1.sayHello = () => {
//   console.log("Hello! i am arr1");
// };
// // this is not a good way to create the same function for different object
// console.log(arr1.__proto__); // this consists of all functions
// arr1.__proto__.push = (n) => {console.log("pushing number : ",n);}
// // the above line changes the definition of push funtion for arr1
// arr1.push(3); // this prints pushing number : 3, instead of actually pushing

// console.log(Array.prototype);
// console.log(String.prototype);
// the above lines means for a particular data type, methods are defined
// we dont need to define them again

// console.log(arr1.sayHello === arr2.sayHello);
// this gives false because for any individual object, if we define a function for individual object,
// then in memory, it is created seperately for every objects

//whereas prototype functions will return true as shown below ->
// console.log("abc".toUpperCase === "xyz".toUpperCase);
// this will return true because they dont have individual functions
// they are using prototype methods which saves memory as well

// Factory Functions -> A function that creates objects
// 1st way to create objects

// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi! my name is ${this.name}`);
//     },
//   };
//   return person;
// }

// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("steve", 28);
// console.log(p1);
// p1.talk();

// Now for every factory function, when an object is created, it creates a copy of the function
// like the talk function will be created for every object

// console.log(p1.talk === p2.talk);

// this will give false
// when we create say 1000s objects, it will create 1000s copies which is inefficient for memory
// this is the disadvantage of factory functions

// New Operator -> 2nd way to create objects
// Constructors -> it doesnt return anything and start with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`hi! my name is ${this.name}`);
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("steve", 29);

// new operator helps to create an instance if we have constructor function created earlier
// when we use new keyword, then it refers to the current objects value, for that, this value refers to the value we give

// console.log(p1.talk === p2.talk);
// this will return true because talk is not individual properties, this is prototype properties
// but, this is a tricky way to use in day to day use

// Classes -> 3rd way to create objects, most effective way , basically a templat for creating objects
// the constructor method is a special method of a class for creating and initializing an object instance of that class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hi! my name is ${this.name}`);
//   }
// }

// let p1 = new Person("adam", 26);
// let p2 = new Person("steve", 29);
// console.log(p1);
// console.log(p2);

// console.log(p1.talk === p2.talk);
// different object refers to the same copy

// Inheritance -> it allows us to create new classes on the basis of already existing classes

// class Person {
//   constructor(name, age) {
//     console.log("parent Person class constructor");
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hi! my name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     console.log("student class constructor");
//     super(name, age); // parent constructor is being called
//     this.marks = marks;
//   }
// }

// let s1 = new Student("abc", 23, 98);
// console.log(s1.name);
// s1.talk();

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age); // parent constructor is being called
//     this.subject = subject;
//   }
// }

// let t1 = new Student("def", 35, "english");
// console.log(t1.name);
// console.log(t1.age);
// t1.talk();

// Now we can notice similarities between student and teacher class -> name, age, talk function
// and we know in programming we should not use repetitive codes
// so we will basically create an another class having common properties
// extends keyword is used to inherit properties
// super keyword means using constructor of parent class

// Taking example of inheritance and creating Mammals classes ->

class Mammals {
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }
  eat() {
    console.log("i can eat");
  }
}

class Dog extends Mammals {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("woof woof...");
  }
  // if same method is used in both parent and child class, child class method overrides the parent class method
  eat() {
    console.log("dog is eating");
  }
}

class Cat extends Mammals {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("meow meow...");
  }
  eat() {
    console.log("cat is eating");
  }
}

let dog1 = new Dog("lucy");
console.log(dog1);
console.log(dog1.name);
dog1.eat();
dog1.bark();

let cat1 = new Cat("tom");
console.log(cat1);
console.log(cat1.name);
cat1.eat();
cat1.meow();
