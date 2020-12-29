var GenericClass = /** @class */ (function () {
    function GenericClass(props) {
        this.props = props;
    }
    GenericClass.prototype.getProps = function () {
        return this.props;
    };
    return GenericClass;
}());
var chocoCakes = [{ expiryData: new Date() }];
var vanillaCakes = [
    {
        expiryData: new Date(),
    },
];
// add 'extends' Interface(IExpirable) to generic,
// to shows that item element has expiryData propertiy
var getExpiredItems = function (items) {
    var currentDate = new Date().getTime();
    return items.filter(function (item) { return item.expiryData.getDate() < currentDate; });
};
// another version
var getExpiredItemsNew = function (items) {
    var currentDate = new Date().getTime();
    return items.filter(function (item) { return item.expiryData.getDate() < currentDate; });
};
var expiredChocolate = getExpiredItems(chocoCakes);
var expiredVanillaCake = getExpiredItemsNew(vanillaCakes);
var cart = {
    items: [],
    addItem: function (item) {
        this.items.push(item);
    },
    getItemByID: function (id) {
        return this.items.find(function (item) { return item.id === id; });
    },
};
cart.addItem({ id: 1, price: 200 });
