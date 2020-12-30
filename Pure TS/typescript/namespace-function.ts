function someFunction2() {
  return 20;
}

namespace someFunction2 {
  export const test = 20;
}

someFunction2();

someFunction2.test
someFunction2()