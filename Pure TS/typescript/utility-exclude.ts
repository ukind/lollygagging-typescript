type drinkList = 'Teh' | 'Kopi' | 'Jus' | 'Air' | null;
type drintDoesntLike = 'Air' | 'Kopi';
// remove drint list that i didnt like
// only available on Type alias, not available in interface
let myFavoriteDrink: Exclude<drinkList, drintDoesntLike>;
myFavoriteDrink = 'Jus';
