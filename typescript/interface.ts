interface IUser {
  name: string;
  age: number;
  //   optional object key and value
  address?: string | number;
}

interface IUser {
  nickname?: string;
}

let pilot: IUser = {
  name: "Bert",
  age: 34
};

console.log(pilot.age);

// interface for function
interface IGreet {
  (name: string, age: number): string;
}

let sing: IGreet;
sing = function(name: string, age: number) {
  return `tikus ${name}, makan sabun ${age}`;
};

sing("yogi", 12);
