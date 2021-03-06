/**
 * 在Typescript3.8版本就开始支持ECMAScript私有字段，使用方式如下：
 */

// class Person {
//   #name: string; // 成员属性；

//   constructor(name: string) {
//     this.#name = name;
//   }

//   greet() {
//     console.log(this.#name)
//   }
// }

// let semlinker = new Person("semlinker");

// semlinker.name; // error

// 与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：

// 私有字段以 # 字符开头，有时我们称之为私有名称；
// 每个私有字段名称都唯一地限定于其包含的类；
// 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
// 私有字段不能在包含的类之外访问，甚至不能被检测到。