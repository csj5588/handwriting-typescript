/**
 * 这里解释一下type 与interface的区别，interface是表述一个函数 类，对象的形状。
 * 
 */

interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void
}

type User2 = {
  name: string
  age: number
}

// type SetUser2 = (name: string, age: number): void;
// 这里没整明白。
