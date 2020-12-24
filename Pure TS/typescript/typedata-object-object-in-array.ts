const family: { name: string; age: number }[] = [
  {
    name: "yogiswara",
    age: 24,
  },
  {
    name: "ida",
    age: 50,
  },
  {
    name: "lala",
    age: 20,
  },
  {
    name: "rudi",
    age: 50,
  },
];

console.log(family);

const getDOM: Record<string, unknown> = {
  getDOM(): any {
    return "test";
  },
  setUsername(): void {
    const username = document.querySelector("username");
  },
};
