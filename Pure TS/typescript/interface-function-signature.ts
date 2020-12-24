interface onClick {
  (inputNumberA: number, inputNumberB: number): number;
}

const buttonCalculate: onClick = (number1, number2): number => {
  return number1 + number2;
};
