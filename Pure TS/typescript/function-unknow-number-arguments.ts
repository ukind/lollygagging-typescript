const sumEverything = (
  arg1?: string,
  arg2?: number,
  ...numbers: Array<number>
): number => number.reduce(
  (prevVal: number, curVal: number, currIdx: number): number => prevVal + curVal,
  0,
);
