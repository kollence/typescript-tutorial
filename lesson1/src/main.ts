let myname: string = "TypeScript";
let age: number = 10;
let isOk: boolean = true;
let album: any;

myname = 'JavaScript';
age = 11;
isOk = false;
album = 5150;


const sum = (a: string, b: number) => a + b;
const sum2 = (a: number, b: number) : number => a + b;

let uniType: string | number;
uniType = 'string';
let uniType2: string | number | boolean;
uniType2 = true;
let uniType3: string | number | boolean = true;
uniType3 = false;