// type accertion using funct
// is keyword
function isDog(test) {
    return test.bark !== undefined;
}
function callMyPat(pet) {
    // typeguard using :accertion
    // looks cyptic
    // if ((<IDog>pet).bark) {
    //   (<IDog>pet).bark();
    //   (<IDog>pet).walk();
    // } else if (isDog(pet)) {
    //   (<ICat>pet).meow();
    // }
    // by using a func
    if (isDog(pet)) {
        pet.bark();
        pet.walk();
    }
}
