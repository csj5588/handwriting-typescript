/**
 * 在Typescrtipt2.7版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个！号
 * 从而告诉Typescript该属性会被明确的赋值。为了更好地理解它的作用，我们来看个具体的例子；
 */

let x: number;
initialize();
// variable "x" is used before being assigned.()
console.log(2 * x); //Error

function initialize() {
  x = 10;
}

// 很明显x变量在赋之前被使用了，要解决这个问题，我们可以使用赋值断言：
// let x!: number;

// 通过赋值断言typescript编译器就会知道该属性会被明确的赋值。