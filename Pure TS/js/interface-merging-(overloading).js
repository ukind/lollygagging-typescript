var resultCart = {
    unitName: 'pieces',
    unit: 10,
    normalPrice: 2000,
    discountPercentage: 20,
    calculateTotal: function (options) {
        if (options && options.discCode) {
            //   calculate with discount
            return 12;
        }
        return 1;
    },
};
// console.log(resultCart.calculateTotal({ disCode: 1111 }));
