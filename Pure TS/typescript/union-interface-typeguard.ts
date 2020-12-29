interface IDog {
  bark(): void;
  walk(): void;
}

interface ICat {
  meow(): void;
  wal(): void;
}

// type accertion using funct
// is keyword
function isDog(test: ICat | IDog): test is IDog {
  return (<IDog>test).bark !== undefined;
}

function callMyPat(pet: IDog | ICat) {
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
