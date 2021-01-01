type someType = string;
type conditionalType = someType extends string ? string : null;

function foo2<T>(val: T) {
  const newFunc = (
    val: T extends boolean ? boolean : T extends string ? string : number,
  ) => val;
  return newFunc;
}

const resultConditional = foo2<string>('1');
