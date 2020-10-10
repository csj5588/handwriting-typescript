/**
 * 对象解构
 */

let person = {
  names: "Semlinker",
  gender: "Male",
};

let { names, gender } = person;

console.log(gender, names)

/**
 * 对象展开运算符
 */

let person2 = {
  namess: "Semlinker",
  gender: "Male",
  address: "Xiamen",
};

// 组装对象
let personWithAge = { ...person2, age: 33 };

// 获取除了某些项以外的其它项。
let { namess, ...rest } = person2;

console.log(namess, rest, personWithAge);