/**
 * interface是一种描述对象或者函数的东西。你可以把它理解为形状，一个对象需要什么样的属性，函数需要什么参数或者返回什么样的值，数组应该是什么样子，一个类
 * 和继承类需要符合什么样的描述等等，下文分七个部分，一起看一下对象接口、函数接口、可索引类型接口、类接口是如何定义的，以及接口的继承、
 * 定义混合类型的接口和继承类的接口是如何使用的？
 * 规定引用类型的形状
 */
// 对象interface

interface Person {
  name: string
  bool?: boolean
  readonly timestamp: number
  readonly arr: ReadonlyArray<number> // 此外还有 ReadonlyMap / ReadonlySet
}

// bool?: boolean // 就是非必须的意思 x?: y

let p1: Person = {
  name: 'oliver',
  bool: true, // ✅可以设置可选属性 并非必要的 可写可不写
  timestamp: + new Date(), // ✅设置只读属性
  arr: [1, 2, 3] // ✅设置只读数组。
}

console.log(p1)

// let p: Person = {
//   age: 'oliver', // ❌多出来的属性
//   name: 123, // ❌类型错误
// }
// p1.timestamp = 123; // ❌ 只读属性不可修改
// p1.arr.pop(); // ❌ 只读属性不可修改

// interface还可以用来规范函数的形状。interface里面需要列出参数列表返回值类型的函数定义。
// 1、定义了一个函数接口
// 2、接口接收三个参数并且不返回任何值
// 3、使用函数表达式来定义这种形状的函数

interface Func {
  // 定义这个函数接收两个必须按参数都是number类型，以及一个可选的字符串参数desc， 这个函数不返回任何值
  (x: number, y: number, desc?: string): void
}

const sum: Func = function(x, y, desc = '') {
  console.log(desc, x + y);
}

sum(32, 22)
console.log(undefined === void 0)

interface StringSet {
  readonly [index: number]: string // ❕需要注意的是index只能为number 类型或者 string
}

let arr1: StringSet = ['hello', 'world']
console.log(arr1[0])
