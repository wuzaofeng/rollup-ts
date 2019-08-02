import _default from './lib/test'
export * from './lib/test2'

interface person {
  name: string;
  age: number;
}

let tom: person = {
  name: 'Tom',
  age: 25
};


if (tom.age == 25) {
  console.log(tom.name + 'is 25 years old.');
}

console.log(111)