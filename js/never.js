function foo(x) {
    if (typeof x === "number") {
        return true;
    }
    else if (typeof x === "string") {
        return false;
    }
    // Without a never type we would error :
    // - Not all code paths return a value (strict null checks)
    // - Or Unreachable code detected
    // But because TypeScript understands that `noTypeData` function returns `never`
    // It can allow you to call it as you might be using it for runtime safety / exhaustive checks.
    noTypeData("not recognized data type");
}
function noTypeData(message) {
    throw new Error(message);
}
console.log(foo(12));
console.log(foo("tikus"));
// console.log(foo(false));
