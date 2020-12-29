// generics function
function genericFunction(varName) {
    return varName;
}
var isNumber = genericFunction(20);
console.log(isNumber);
// generic with arrow func
var boolean = function (varName) { return varName; };
var isTrue = boolean(true);
