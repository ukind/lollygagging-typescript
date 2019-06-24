// creating template for object properties
(function() {
  type User = {
    name: string;
    age: number;
  };

  const people: User = {
    name: "yogiswara",
    age: 12
  };

  console.log(people);
})();

// type accertions! so, we could set only one or each properties
(function() {
  type user = {
    name: string;
    age: number;
  };

  const teacher = {};
  // do spliting, dont need to set value for 'age' object
  (teacher as user).name = "yogiswara";
  console.log(teacher);
})();
