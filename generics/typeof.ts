/**
 * 用来获取一个变量声明 或 对象的类型
 */

interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: 'semlinker', age: 33 };
type Sem = typeof sem; // - Person

function toArray (x: number) : Array<number> {
  return [x];
}

type Func = typeof toArray; // (x:number) => number[];