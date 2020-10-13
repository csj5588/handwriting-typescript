/**
 * 在面向对象语言中，类是一种面向对象计算机编程语言的构造，是面向对象的蓝图，描述了所创建的对象共同的属性和方法。
 * 具体实现
 */

class Greeter {
  // 静态成员
  static cname: string = "Greeter";
  // 成员属性
  greeting: string;

  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message;
  }

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  }

  // 成员方法
  greet() {
    return "Hello," + this.greeting;
  }
}

let greeter = new Greeter("world");

// 区别方面直接看 es5代码即可

// "use strict";
// var Greeter = /** @class */ (function () {
//     // 构造函数 - 执行初始化操作
//     function Greeter(message) {
//       this.greeting = message;
//     }
//     // 静态方法
//     Greeter.getClassName = function () {
//       return "Class name is Greeter";
//     };
//     // 成员方法 // 成员的直接干原型链去了。
//     Greeter.prototype.greet = function () {
//       return "Hello, " + this.greeting;
//     };
//     // 静态属性
//     Greeter.cname = "Greeter";
//     return Greeter;
// }());
// var greeter = new Greeter("world");

