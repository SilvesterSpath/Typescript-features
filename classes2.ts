class Vehicle2 {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

// Inheritance (this is a child class)
class Car extends Vehicle2 {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();

car.drive();
car.honk();
