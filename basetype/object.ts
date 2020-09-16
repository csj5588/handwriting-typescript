// object 表示非原始类型 - 原始类型有哪些呢？找一下 Boolean、Number、String、Null、Undefined、Symbol（ES6 新增）

interface ObjectConstructor {
  create(o: object | null) : any;
  // ...
}

const proto = {};

Object.create(proto); // ok
Object.create(null);  // ok
Object.create(undefined); // Error
// Object.create(1337); // Error


// Object类型： 它是所有Object类的实例的类型，它由以下两个接口来定义：
// Object接口定义了Object.prototype原型对象上的属性；

interface Object {
  constructor: Function;
  toString(): string;
  toLocaleString(): string;
  valueOf(): Object;
  hasOwnProperty(v: PropertyKey): boolean;
  isPrototypeOf(v: Object): boolean;
  propertyIsEnumerable(v: PropertyKey): boolean;
}
// ObjectConstructor接口定义了Object类的属性
interface ObjectConstructor {
  new(value?: any): Object;
  (value?:any): any;
  readonly prototype: Object;
  getPrototypeOf(o: any): any;
}

declare var Object: ObjectConstructor;

// Object类的所有实例都继承了Object接口中的所有属性。
console.log(Object)