// create custom Pick for type
type doPickType<T, Properties extends keyof T> = {
  [key in Properties]: T[key];
};

type pickedType = doPickType<{ a: 'a'; v: 'v' }, 'v'>;
// equal to =>
// type pickedType = {
//     v: 'v';
// }