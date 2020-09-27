/**
 * 在Typescript中交叉类型是将多个类型合并为一个类型，通过&运算符可以将现有的多种类型叠加到一起成为一种类型，
 * 它包含了所需的所有类型的特性。
 */

type PartialPointX = { x: number };

type Point = PartialPointX & { y: number };

let point: Point = {
  x: 1,
  y: 1,
}

// 在上面代码中我们先定义了PartialPointX类型接着使用&运算符创建一个新的Point类型。
// 表示一个含有x和y坐标的点，然后定义了一个Point类型的变量并初始化。