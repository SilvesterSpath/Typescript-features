// generic name for an interface
interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
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
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle2(oldCivic2);
