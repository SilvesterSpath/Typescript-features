class Vehicle3 {
  // either here initialize a property or in the constructor (this is declaration)
  // color: string;

  // constructor(color: string = 'black') {
  //  this.color = color;
  //}

  // this is a shorter version for the code above
  constructor(public color: string = 'black') {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle3('orange');
console.log(vehicle.color);

// Inheritance (this is a child class)
/* class Car3 extends Vehicle3 {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Car3();

car2.startDrivingProcess();
car2.startDrivingProcess(); */
