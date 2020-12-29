// generics function
function genericFunction<T>(varName: T): T {
  return varName;
}
const isNumber = genericFunction<number>(20);
console.log(isNumber);

// generic with arrow func
const boolean = <T>(varName: T): T => varName;
const isTrue = boolean<boolean>(true);
