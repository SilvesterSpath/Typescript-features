const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// here I have to add the whole expected structure of profile
const { age }: { age: number } = profile;
/* const {age, name}: {age:number; name: string} = profile */

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

/* const { lat, lng }: { lat: number; lng: number } = profile.coords; */
