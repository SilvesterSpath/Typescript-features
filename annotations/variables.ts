// we can delete all these annotations, and everything will work as before
// this is called 'Type inference'
let apples: number = 5;
let speed: string = 'fast';
let hadName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let convertible: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initalize it later
let words = ['red', 'green', 'blue'];
let foundWords: boolean;

for (const item of words) {
  if (item === 'green') {
    foundWords = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (const item of numbers) {
  if (item > 0) {
    numberAboveZero = item;
  } else {
    numberAboveZero = false;
  }
}
