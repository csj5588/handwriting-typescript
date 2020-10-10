/**
 * 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。
 * Typescript中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外
 * 也常用与对[对象的形状（shape）]进行描述
 */

// 对象的形状

interface Person {
  name: string;
  age: number;
}

let semlinker: Person = {
  name: "semlinker",
  age: 33,
}

// 可选｜只读属性
interface Person2 {
  readonly name: string;
  age?: number;
}

/**
 * 只读属性用于限制只能在对象刚刚创建的时候修改其值。此外Typescript还提供了ReadonlyArray<T>类型，它与Array<T>相似，
 * 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
 */

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 100;
// a = ro; // error

/**
 * 任意属性
 * 有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用索引签名的形式来满足上述要求。
 */

interface Person3 {
  name: string;
  age?: number;
  [proName: string]: any;
}

const p1: Person3 = { name: "semlinker" };
const p2: Person3 = { name: "lolo", age: 5 };
const p3: Person3 = { name: "kakuqo", sex: 1 }

/**
 * 接口与类型别名的区别
 */

// Objects/Functions
// 接口和类型别名都可以用来描述对象的形状或函数签名

// 接口
interface Point {
  x: number
  y: number
}

// 函数签名
interface setPoint {
  (x: number, y: number): void;
}

// 类型别名
type Point2 = {
  x: number
  y: number
}

type setPoint2 = (x: number, y: number) => void

// other types 与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组
// primitive
type Name = string;

// object
type PartialPointX = { x: number };
type PartialPointY = { y: number };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];


