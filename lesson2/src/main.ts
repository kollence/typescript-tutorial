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
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let tupleType: [string, number, boolean] = ['Gibson', 1984, true];
let mixed = ['Gibson', 1984, true];

// mixed = tupleType // works
// tupleType = mixed // error
tupleType[2] = false; 
tupleType[0] = 'Ibanez'; // works

// Object
let person: object
person = []
console.log(typeof person)
person = bands
person = {}

const exampleObject = { name: 'Van Halen', age: 40, isBand: true }
exampleObject.name = 'Van Halen II'
// exampleObject.age = true    // error

// type Person = {
//     name: string,
//     age?: number,
//     isBand: boolean,
//     albums: (string | number)[]
// }
interface Person {
    name: string,
    age?: number,
    isBand: boolean,
    albums: (string | number)[]
}

let person2: Person = {   // works
    name: 'Van Halen',
    age: 40,
    isBand: true,
    albums: ['Van Halen', 'Van Halen II', 1984]
}
let JP: Person = {   // works
    name: 'Jimmy',
    isBand: true,
    albums: ['I', 'II', 1989]
}

// person2.age =  '33'   // error
// person2 = JP // works

// pass object with specific type as argument to function
const greetGituars = (guitars: Person) => {
    return `Hello ${guitars.name}`
}
console.log(greetGituars(JP));
