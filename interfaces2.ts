// generic name for an interface
interface Vehicle2 {
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle2 = (vehicle: Vehicle2): void => {
  console.log(vehicle.summary());
};

printVehicle2(oldCivic2);
