// object 表示非原始类型 - 原始类型有哪些呢？找一下 Boolean、Number、String、Null、Undefined、Symbol（ES6 新增）

interface ObjectConstructor {
  create(o: object | null) : any;
  // ...
}

const proto = {};

Object.create(undefined);