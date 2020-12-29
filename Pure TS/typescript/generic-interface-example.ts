class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}

// =========================================

interface IExpirabele {
  expiryData: Date;
}
interface IChocolateCake extends IExpirabele {}
interface IVanillaCake extends IExpirabele {}
interface IGetExpiredItems {
  <T extends IExpirabele>(items: T[]): T[];
}

const chocoCakes: IChocolateCake[] = [{ expiryData: new Date() }];
const vanillaCakes: IVanillaCake[] = [
  {
    expiryData: new Date(),
  },
];

// add 'extends' Interface(IExpirable) to generic,
// to shows that item element has expiryData propertiy
const getExpiredItems = <T extends IExpirabele>(items: T[]) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryData.getDate() < currentDate);
};

// another version
const getExpiredItemsNew: IGetExpiredItems = (items) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryData.getDate() < currentDate);
};

const expiredChocolate = getExpiredItems<IChocolateCake>(chocoCakes);
const expiredVanillaCake = getExpiredItemsNew<IVanillaCake>(vanillaCakes);

// ==========================================================================

interface IShoppingCart<ItemID, ItemType> {
  items: ItemType[];
  // addItem(this: IShoppingCart<ItemID, ItemType>, item: ItemType): void;
  addItem: (this: IShoppingCart<ItemID, ItemType>, item: ItemType) => void;
  // getItemByID(this: IShoppingCart<ItemID, ItemType>, id: ItemID): ItemType;
  getItemByID: (this: IShoppingCart<ItemID, ItemType>, id: ItemID) => ItemType | undefined;
}

interface IItem {
  id: number;
  price: number;
}

const cart: IShoppingCart<number, IItem> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemByID(id) {
    return this.items.find((item) => item.id === id);
  },
};

cart.addItem({ id: 1, price: 200 });
