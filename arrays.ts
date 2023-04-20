const carMakers0: string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carByMake0: string[][] = [];
const carsByMake = [['f150', 'f140'], ['corolla'], ['camaro']];

// Help with infernce when extracting values
const lastMaker = carMakers.pop();
const car = carMakers[0];

// Prevent incompatible values
carMakers.push('mercedes');

// Help with 'map'
carMakers.map((item: string): string => {
  return item;
});
