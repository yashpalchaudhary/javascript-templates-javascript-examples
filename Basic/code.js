/*===Variables==*/
// var age = 25;
// var age = 21;
// var age = 30;
// console.log (age);

// let number = 100;
// number = 200;
// console.log(number);

/*const pi = 3.14;
pi = 3.14;
console.log(pi);*/





/*===Data types==*/
/*String → represents text*/

/*let name = "Yashpal";
console.log(name);*/

/*Boolean → represents true or false
 let isStudent = true;
 let isengineer = false;
 console.log(isengineer);*/

/*Undefined 
 let city;
console.log(city);*/

/*Null
let myValue = null;   // null means intentionally no value
console.log(myValue);*/

/*Create a unique symbol
const id = Symbol("id");
const user = {
  name: "Yashpal",
  [id]: 101  // Using symbol as a key
};

console.log(user.name);   // Output: Yashpal
console.log(user[id]);    // Output: 101
console.log(user.id);     // Output: undefined (because 'id' is not a normal key)*/

/*Using 'n' at the end to define BigInt
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); */

/*Object
const person = {
  name: "Yashpal",
  age: 25,
  isStudent: true
};

console.log(person.name);  // Access property → Yashpal
console.log(person.age);   // 25*/

/*Array
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);        // [ 'Apple', 'Banana', 'Mango' ]
console.log(fruits[0]);     // Apple (access first element)*/

/*function
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);  // 8*/

/*Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000


let x = 5;
x++;
console.log(x);  // 6

x--;
console.log(x);  // 5*/

/*Assignment Operators 
let x = 10;
console.log(x);*/

/*Comparison Operators
let a = 10;
let b = 5;

console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= 10);  // true
console.log(a <= 9);   // false

console.log(a == "10");   // true (only checks value)
console.log(a === "10");  // false (checks value & type)

console.log(a != "10");   // false (values are equal)
console.log(a !== "10");  // true  (types are different)*/

/*Logical Operators 
let a = true;
let b = false;
console.log(a && b);   // false (both must be true)
console.log(a || b);   // true  (at least one is true)
console.log(!a);       // false (NOT true = false)*/

/*Bitwise Operators
let a = 5;   // binary: 0101
let b = 1;   // binary: 0001
console.log(a & b);   // 1  (AND)
console.log(a | b);   // 5  (OR)
console.log(a ^ b);   // 4  (XOR)
console.log(~a);      // -6 (NOT)
console.log(a << 1);  // 10 (Left Shift)
console.log(a >> 1);  // 2  (Right Shift)
console.log(a >>> 1); // 2  (Zero-fill Right Shift)*/

/*String operator
let firstName = "Yashpal";
let lastName = " Singh";

let fullName = firstName + lastName; 
console.log(fullName); // Yashpal Singh

let greeting = "Hello, ";
greeting += "How are you?";
console.log(greeting); // Hello, How are you?*/

/*Ternary Operator
let age = 18;
let result = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(result);  // You are an adult*/

/*Implicit Conversion (Type Coercion)
console.log("5" + 2);   // "52"  (Number → String)
console.log("10" - 3);  // 7     (String → Number)
console.log(true + 1);  // 2     (Boolean → Number)*/

/*Explicit Conversion (Type Casting)
let num = 100;
console.log(String(num));     // "100"
console.log(num.toString());  // "100"*/

// Loose Equality (==)
// console.log(5 == "5");   // true  (string converted to number)
// console.log(0 == false); // true  (false converted to 0)
// console.log(null == undefined); // true

// Strict Equality (===)
// console.log(5 == "5");   // true  (string converted to number)
// console.log(0 == false); // true  (false converted to 0)
// console.log(null == undefined); // true

// Conditional Statements:
// if Statements
// let age = 20;

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// }

// if-esle
// let age = 16;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// if...else if...else Statement
// let marks = 72;
// if (marks >= 90) {
//   console.log("Grade: A+");
// } else if (marks >= 75) {
//   console.log("Grade: A");
// } else if (marks >= 50) {
//   console.log("Grade: B");
// } else {
//   console.log("Fail");
// }

//  switch Statement
// let day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("Start of the week.");
//     break;
//   case "Friday":
//     console.log("Weekend is near!");
//     break;
//   case "Sunday":
//     console.log("It's holiday!");
//     break;
//   default:
//     console.log("It's a normal day.");
// }





// Ternary Operator
// let age = 18;
// let message = (age >= 18) ? "You are an adult." : "You are a minor.";
// console.log(message);


//for loop
 //for(let i = 1; i <=5; i++) {
//  console.log("number", i);
// }



// let i = 1;
// while(i <= 10) {
//   console.log("count", i)
//   i++;
// }


// let i = 1;
// do {
//   console.log("step", i);
//   i++
// } while(i <= 10);



// for of loop
// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }


// let name = "Yash";

// for (let char of name) {
//   console.log(char);
// }



// for in loop
// let person = { name: "Yashpal", age: 22, city: "Delhi" };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }



// function
// function sayHello(name = "Guest") {
//   console.log("Hello, " + name);
// }

// sayHello("Yashpal"); // Hello, Yashpal
// sayHello();          // Hello, Guest


//scope
//  Global Scope
// Any variable declared outside of all functions and blocks is global
// let name = "Yashpal"; // Global variable

// function greet() {
//   console.log("Hello " + name); // ✅ Accessible inside function
// }

// greet();
// console.log(name); // ✅ Accessible outside too
// function myFunction() {
//   let message = "Hello from inside the function!";
//   console.log(message); // ✅ Accessible here
// }

// myFunction();

// console.log(message); // ❌ Error: message is not defined



// Nested function
// function getSquare(num){
//   function getSquare(n1){
//     console.log(n1*n1);
//   }
//   getSquare(num)
// }
// getSquare(5);


// function===
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

// function num () {
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }
// num()


// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)//7


// const addTwoNumbers = function(number1, number2) {
//   return number1 + number2;
// };
// console.log(addTwoNumbers(3, 4)); // 7


// function addTwoNumbers() {
//     let number1 = 3; // outer variable
//     return function(number2) {
//         console.log(number1 + number2); // uses outer variable
//     };
// }

// const adder = addTwoNumbers(); 
// adder(4); // 7



//Currying====

// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(add(1)(2)(3)); // 6



// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(add(1)(2)(3)); // 6



// prototyping
// let a = {
//   name: "Harry",
//   language: "Javascript"
// }
// console.log(a)


// === Asynchronous JavaScript====

// Asynchronous
// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2 (Async, after 2s)");
// }, 2000);

// console.log("Task 3");

// synchronous 
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");




// setTimeout
// console.log("Start");
// setTimeout(() => {
//   console.log("Hello after 3 seconds!");
// }, 3000);
// console.log("End");


//clearout
// let timer = setTimeout(() => {
//   console.log("❌ You will NOT see this message!");
// }, 3000);

// console.log("✅ Script started...");
// clearTimeout(timer); // Cancels the timeout

//setinterval
// let count = 1;
// let timer = setInterval(() => {
//   console.log("Count: " + count);
//   if (count === 5) {
//     clearInterval(timer); // stop interval after 5 logs
//     console.log("Interval stopped!");
//   }
//   count++;
// }, 1000);


//callback
// console.log("Start");
// setTimeout(() => {
//   console.log("This message comes after 2 seconds (callback executed)");
// }, 2000);
// console.log("End");



// Synchronous Callbacks
// function processUserInput(callback) {
//   console.log("Processing user input...");
//   callback(); // executed immediately
// }

// processUserInput(() => {
//   console.log("Synchronous callback executed.");
// });


// Asynchronous callback
// console.log("Start");

// setTimeout(() => {
//   console.log("Asynchronous callback executed after 2 seconds.");
// }, 2000);

// console.log("End");


// promise
// let myPromise = new Promise((resolve, reject) => {
//   let dataFound = true;

//   setTimeout(() => {
//     if (dataFound) {
//       resolve("✅ Data received successfully!");
//     } else {
//       reject("❌ Error: Data not found!");
//     }
//   }, 2000);
// });

// // Handling the Promise
// myPromise
//   .then(result => console.log(result))   // when resolved
//   .catch(error => console.log(error))    // when rejected
//   .finally(() => console.log("Promise completed!"));


//pending
// let promise = new Promise((resolve, reject) => {
//   console.log("Promise is in Pending state...");
//   setTimeout(() => {
//     resolve("✅ Promise Resolved!");
//   }, 3000);
// });

// console.log(promise); // Logs: Promise { <pending> }



//Fulfilled (Resolved) 
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("✅ Task completed successfully!");
//   }, 2000);
// });
// promise.then(result => console.log(result));


//reject
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("❌ Error: Task failed!");
//   }, 2000);
// });

// promise
//   .then(result => console.log(result))   // won't run (because it rejects)
//   .catch(error => console.log(error));   // handles rejection

//async
// async function myFunc() {
//   return "Hello from async!";
// }

// myFunc().then(result => console.log(result));

//wait
// async function myFunc() {
//   return "Hello from async!";
// }

// async function callFunc() {
//   let result = await myFunc();   // waits until myFunc() resolves
//   console.log(result);           // prints the resolved value
// }

// callFunc();


//await
// async function myFunc() {
//   return "Hello from async!";
// }

// async function callFunc() {
//   let result = await myFunc();   // waits until myFunc() resolves
//   console.log(result);           // prints the resolved value
// }

// callFunc();




//event loop
// console.log("1️⃣ Start");

// setTimeout(() => {
//   console.log("3️⃣ Timeout Callback");
// }, 2000);

// console.log("2️⃣ End");




























// =========revision=======
// var num = 12;
// var age = 2;
// console.log(num);
// console.log(age);

// let age = 24;
// let num = 21;
// console.log(age);
// console.log(num);


// const name ="yash";
// const rol ="yak";
// console.log(name);
// console.log(rol);

// let name = "yashpal";
// console.log(name);

// let name = "yashpal";
// console.log(name);

// let num = 745292770;
// console.log(num);


// const result;
// console.log(result);


// let istrue = true;
// let isflase = false;
// console.log(isflase);


// let myvalue = null;
// console.log(myvalue);
 


// let value = 193420943403943094434830n;
// console.log(value);


// const car = {
//   price: "three lack",
//   total: 3000,
//   room: 5,
// };

// console.log(car.total);


// const book = ["math", "english" ,"hindi"];
// console.log(book);
// console.log(book[2]);

// function add (a, b){
//   return  a + b;
// }
// console.log(add(4, 4));


// let a = 10;
// let b = 20;
// console.log(a<=b);


// console.log("5" + 2);


// console.log(0===3);

// let age = 20;
// if(age >= 18) {
//   console.log("You are big");
// }

// let age = 20;
// if(age >= 18) {
//   console.log("you are adult")
// } else {
//    console.log("you are not adult")
// }



// let marks = 30;
// if(marks >= 75){
//   console.log("A+");
// }else if(marks >= 60){
//   console.log("b+");
// }else if(marks >= 50){
//   console.log("c+");
// }else if(marks >= 40){
//   console.log("d+");
// }else{ 
//   console.log("fail");
//   }


// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week.");
//     break;
//   case "Friday":
//     console.log("Weekend is near!");
//     break;
//   default:
//     console.log("It's a normal day.");
// }


// let days = "tuesday";
// switch (days) {
//  case "monday":
//   console.log(1);
//   break;
//   case "tuesday":
//     console.log(2);
//     break;
// }



// let age = 18;
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result); // Adult


// let age = 15;
// let result = (age >= 18) ? "adult" : "mirror"
// console.log (result);

// for(let i = 1; i <=5; i++) {
//  console.log("number", i);
// }



// let i = 1;
// while(i <= 10) {
//   console.log("count", i)
//   i++;
// }


// let i = 1;
// do {
//   console.log("step", i);
//   i++
// } while(i <= 10);

