(function() {
  interface IPerson {
    name: string;
  }

  interface IHero extends IPerson {
    superpower: string;
  }

  const regularBert: IPerson = {
    name: "bert"
  };

  const singer: IHero = {
    name: "Cael",
    superpower: "sing"
  };
})();

// interface extra: add additional objecy key and value
(function() {
  interface IUser {
    name: string;
    readonly age: number;
    address?: string;
    // syntax for adding object key and properties
    [property: string]: any;
  }

  let adminUser: IUser = {
    name: "yogi",
    age: 22,
    lagu: "tikus makan sabun",
    anotherKey: "example of another key"
  };

  console.log(adminUser.lagu);
})();
