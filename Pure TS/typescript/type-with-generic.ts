// converting to map with generic
type bigColor = 'blue' | 'yellow';
type mapAnotherColor<anotherColor extends string | number | symbol> = {
  [P in anotherColor]: P;
};
// do the convertion
type thirdColor = mapAnotherColor<bigColor>;
// it becomes =>
// type thirdColor = {
//     purple: "purple";
//     black: "black";
// }
