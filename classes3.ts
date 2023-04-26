class Vehicle3 {
  protected honk(): void {
    console.log('beep');
  }
}

// Inheritance (this is a child class)
class Car3 extends Vehicle3 {
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
car2.startDrivingProcess();
