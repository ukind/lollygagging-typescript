namespace myNameSpace {
  export const x: number = 2;
  export interface someInterface {
    y: number;
  }
}

namespace myNameSpace {
  export const getX = () => x;
  export interface someInterface {
    x: number;
  }
}

myNameSpace.x;
myNameSpace.getX();

const numberMyNameSpace: myNameSpace.someInterface = {
  x: 1,
  y: 2,
};
