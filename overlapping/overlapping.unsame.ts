/**
 * 同名非基础类型属性的合并
 * 
 * 在上面示例中，刚好接口X和接口Y中内部成员c的类型都是基本数据类型，那么如果是非基本数据类型的话，又会是什么情况。
 */

interface D { d: boolean }
interface E { e: string }
interface F { f: number }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: 'semlinker',
    f: 666
  }
};

console.log('abc', abc)

// 由上图可知，在混入多个类型时，若存在相同的成员，且成员类型为非基本数据类型，那么是可以成功合并。