var vegetables;
(function (vegetables) {
    vegetables["Tomato"] = "tomato";
    vegetables["Onion"] = "onion";
})(vegetables || (vegetables = {}));
var NVegetables;
(function (NVegetables) {
    function makeSalad() {
        return vegetables.Onion + vegetables.Tomato;
    }
    NVegetables.makeSalad = makeSalad;
})(NVegetables || (NVegetables = {}));
var salad = NVegetables.makeSalad();
// [LOG]: "oniontomato" 
