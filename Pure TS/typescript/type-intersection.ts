type Second = number;
const detik: Second = 10;

type Triangle<type> = {
  height: type;
  length: type;
};

const segitiga: Triangle<number> = {
  height: 10,
  length: 14,
};

// Extending a type via intersections
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: Boolean;
};

// const bear = getBear();
// bear.name;
// bear.honey;

const bear: Bear = {
  honey: true,
  name: 'kango',
};

bear.honey