class Foo {
  foo: number;

  commonProp: string;
}

class Bar {
  bar: number;

  commonProp: string;
}

function fooBarFunc(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
