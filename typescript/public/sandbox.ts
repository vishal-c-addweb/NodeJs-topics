/** Basic types */
// let character = 'mario';
// let age = 30;
// let isBlack = false;


// //we will not change or convert defined types

// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }

// console.log(circ('hello'));

// --------------------------------------------------------------------------------------------------------

/** Objects and arrays */

//array

// let fruits = ['mango','bannana','apple'];

// fruits.push('orange');

// fruits[1] = ('rasbary');

// let numbers = [10,29,22,12];

// numbers.push(22);

// //we can't push number in string array and string in number array for that we need to create mix array
// //we can't change array type itself

// let mix = ['chen',22,'jkjkkkk',33]

// mix.push(233);

// mix.push('kk');

// console.log(mix);

// //objects

// let ninjas = {
//     name: 'mario',
//     belt: 'black',
//     age: 23
// }

// //we can't override object can't add any field can't change type of field
// console.log(ninjas);

// --------------------------------------------------------------------------------------------------------

/** explicit types */

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// //after assign explicit type we can't change it types
// age = 30;

// isLoggedIn = true;

// ///array

// let ninjas: string[];

// ninjas = ['zcc','zczc']

// console.log(ninjas);

// //we can't push on defined array for that we need first add value

// let mario: string[];

// mario.push("kkk")

// console.log(mario);

// //so we defined empty array

// let cake: string[] = [];

// cake = ['ad','azdfd'];

// console.log(cake);

// ///union types
// let mixed : (string|number|boolean)[] = [];

// mixed.push('new');
// mixed.push(30);
// mixed.push(true);
// console.log(mixed);

// let uid: string|number;
// uid = '123';
// uid = 123;

// ///objects
// let ninjaOne: object;
// ninjaOne = { name: "vk", age: 20 };

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor: string
// }

// ninjaTwo = {
//     name: 'mario',age: 20, beltColor: 'red'
// }

// --------------------------------------------------------------------------------------------------------

/** Dynamic types */

// let age: any = 25;

// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigu' };
// console.log(age);

// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('any');
// mixed.push(true);
// console.log(mixed);

// let ninja: { name: any, age: any };
// ninja = { name: "vk", age: 22 };
// console.log(ninja);
// ninja = { name: 23, age: 'kk' };
// console.log(ninja);

// --------------------------------------------------------------------------------------------------------

// ///Function Basics

// let greet: Function;

// greet = () => {
//     console.log("hello world");
// }

// // const add = (a: number,b: number) => {
// //     console.log(a + b);
// // }

//                                     //union type // void is also used to return 
// const add = (a: number,b: number,c: number | string = 10):  => {
//     console.log(a + b);
//     console.log(c);
// }
// add(5,11,'20');

// const minus = (a: number, b: number) => {
//     return a + b;
// } 

// ///function assign type as per result
// let result = minus(10,2);

// --------------------------------------------------------------------------------------------------------

// ///Type Aliases

// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum }

// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }

// const greetAgain = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }

// --------------------------------------------------------------------------------------------------------

// ///Function signature

// //signature
// let greet: (a: string, b: string) => void;

// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`)
// }

// //signature
// let calc: (a: number, b: number, c: string) => number;

// calc = (num1: number, num2: number, action: string) => {
    
//     if (action == "add") {
//         return num1 + num2;
//     }
//     else {
//         return num1 - num2;
//     }

// }

// //signature

// type person = {name: string, age: number};

// let logDetails: (obj: person) => void;

// logDetails = (ninjas: person) => {
//     console.log(`${ninjas.name} is ${ninjas.age} years old`);
// }

// --------------------------------------------------------------------------------------------------------

// ///DOM interaction & type casting
