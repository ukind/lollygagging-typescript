(function () {
    var mix;
    // this is correct!
    mix = ["tikus", 2];
    // this is incorrect!
    // mix = [2, "tikus"];
    mix = ["kucing", 2];
    mix[0].toUpperCase();
    mix[1].toString();
    console.log(mix);
})();
