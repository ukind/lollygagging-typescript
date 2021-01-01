type foodList = 'Ayam' | 'Nasi' | 'Tempe';
type foodILike = 'Tempe';
// only get the food I like
// only available in types
const myFavoriteFood: Extract<foodList, foodILike> = 'Tempe';
