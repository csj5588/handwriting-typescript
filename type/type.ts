/**
 * 类型别名（type alias）
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

// type SetUser2 = (name: string, age: number) => void;
// 这里没整明白。
// 2020-10-10 整明白了 类型别名中但函数标签
// 2021-03-10
// types vs interface
// 当创建新当对象及对象方法当时候使用interface
// 当定义一个函数当时候使用types
// 他们需要配合的工作并且在项目中不断摸索
