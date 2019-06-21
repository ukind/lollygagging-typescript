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
