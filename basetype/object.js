// object 表示非原始类型 - 原始类型有哪些呢？找一下 Boolean、Number、String、Null、Undefined、Symbol（ES6 新增）
var proto = {};
Object.create(proto); // ok
Object.create(null); // ok
Object.create(undefined); // Error
// Object类的所有实例都继承了Object接口中的所有属性。
console.log(Object);
