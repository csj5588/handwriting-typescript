/**
 * 联合类型
 * 联合类型通常与null 或undefined一起使用
 */

const sayHello = (name: string | undefined) => {
  // ...
}

// 例如，这里name 的类型是string ｜ undefined 意味着可以将string 或 undefined 的值传递给sayHello函数。
sayHello("semlinker");
sayHello(undefined);

// 通过这个实例，你可以凭你直觉知道类型A和类型B联合后的类型是同时接收A和B值的类型。此外，
// 对于联合类型来说，你可能会遇到一下写法；

let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';

// 以上治理中的1、2或‘click’被称为子棉量类型，用来约束取之只能是某几个之中的一个

console.log(num);
