/**
 * 函数重载
 * 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
 */

interface Combinable {
  x: number,
}

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//   // type Combinable = string | number;
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add('Semlinker', ' Kakuqo');

/**
 * 这里需要注意的是，当typescript编译器处理函数重载时候，他会查找重载列表，尝试使用第一个重载定义，如果匹配的话就是用这个，因此，在定义重载的时候，
 * 一定要把最精确的定义放在最前面，另外在Calculator类中 add(a, Combinable, b: Combinable) {} 并不是重载列表的一部分因此对于add成员方法来说，我们只定义了四个重载方法。
 */