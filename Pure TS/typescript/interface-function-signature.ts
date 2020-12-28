interface onClick {
  (inputNumberA: number, inputNumberB: number): number;
}

const buttonCalculate: onClick = (number1, number2): number => number1 + number2;
