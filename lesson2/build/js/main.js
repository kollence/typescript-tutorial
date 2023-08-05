"use strict";
let stringArray = ['a', 'b', 'c'];
let guitars = ['Gibson', 'Fender', 'PRS', 5150];
let mixData = ['Gibson', 1, true];
stringArray[0] = 'd';
stringArray.push('e');
guitars[0] = 1984;
guitars.push('Ibanez');
mixData[2] = 1984;
mixData[0] = 'Ibanez';
mixData[1] = false;
let emptyArray = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let tupleType = ['Gibson', 1984, true];
let mixed = ['Gibson', 1984, true];
// mixed = tupleType // works
// tupleType = mixed // error
tupleType[2] = false;
tupleType[0] = 'Ibanez'; // works
// Object
let person;
person = [];
console.log(typeof person);
person = bands;
person = {};
const exampleObject = { name: 'Van Halen', age: 40, isBand: true };
exampleObject.name = 'Van Halen II';
let person2 = {
    name: 'Van Halen',
    age: 40,
    isBand: true,
    albums: ['Van Halen', 'Van Halen II', 1984]
};
let JP = {
    name: 'Jimmy',
    age: 44,
    isBand: true,
    albums: ['I', 'II', 1989]
};
// person2.age =  '33'   // error
// person2 = JP // works
// pass object with specific type as argument to function
// const greetGituars = (guitars: Person) => {
//     return `Hello ${guitars.name?.toUpperCase()}`
// }
const greetGituars = (guitars) => {
    if (guitars.name) {
        return `Hello ${guitars.name.toUpperCase()}`;
    }
    return `Hello I don't know your name`;
};
console.log(greetGituars(JP));
// Enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue"; // 2
})(Color1 || (Color1 = {}));
// auto notation
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue"; // 3
})(Color2 || (Color2 = {}));
console.log(Color1.Red); // 0
console.log(Color2.Red); // 1
