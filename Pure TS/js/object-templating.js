// creating template for object properties
(function () {
    var people = {
        name: "yogiswara",
        age: 12,
    };
    console.log(people);
})();
// type accertions! so, we could set only one or each properties
(function () {
    var teacher = {};
    // do spliting, dont need to set value for 'age' object
    teacher.name = "yogiswara";
    console.log(teacher);
})();
