class Vehicle4 {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle4 = new Vehicle4('orange');
console.log(vehicle4.color);

// Inheritance (this is a child class)
class Car4 extends Vehicle4 {
  constructor(public wheels: number, color: string) {
    // this is a reference to the constructor method of the parent
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car4 = new Car4(10, 'red');

car4.startDrivingProcess();
car4.startDrivingProcess();
