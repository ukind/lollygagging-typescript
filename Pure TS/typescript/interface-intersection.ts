interface IA {
  a: number;
}

interface IB {
  b: number;
}

function foo(obj: IA & IB) {
  return obj.a + obj.b;
}

// another example with combining object
const objA = {
  a: 1,
};

const objB = {
  a: 2,
};

const combine = <objectA extends object, objectB extends object>(
  A: objectA,
  B: objectB,
): objectA & objectB => ({ ...A, ...B });
console.log(combine(objA, objB));
