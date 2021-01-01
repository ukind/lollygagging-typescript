// give an error for null / undefinid types
interface IFruitProperties {
  taste: string;
  shape: string;
  color?: 'blue' | 'red' | 'orange';
}

function changeColor(
  id: number,
  color: NonNullable<IFruitProperties['color']>,
) {
  return color;
}

// if null, will error
// const result = changeColor(1, null);
