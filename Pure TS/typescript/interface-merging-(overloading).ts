interface ICart<T> {
  calculateTotal(): T;
  normalPrice: T;
  unitName: string;
}

interface ICart<T> {
  unit: T;
}

interface IDiscount<D> {
  discountPercentage: D;
}

interface ICart<T> extends IDiscount<T> {}

const resultCart: ICart<number> = {
  unitName: 'pieces',
  unit: 10,
  normalPrice: 2000,
  discountPercentage: 20,
  calculateTotal(options?: { discCode: number }): number {
    if (options && options.discCode) {
      //   calculate with discount
      return 12;
    }
    return 1;
  },
};

// console.log(resultCart.calculateTotal({ disCode: 1111 }));
