/**
 * 限制类的写法
 */

// 类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型。
interface Point {
  x: number
  y: number
}
class SomePoint implements Point {
  x = 1;
  y = 2;
}

type Point2 = {
  x: number
  y: number
};
class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

type PartialPoint = { x: number; } | { y: number; };

// 类 不能继承 (implements) 类型别名 的 联合类型
// class SomePartialPoint implements PartialPoint { // Error
//   x = 1;
//   y = 2;
// }