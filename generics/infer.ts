/**
 * 条件类型语句中，可以使用infer声明一个类型变量 并且对他进行使用
 */

type ReturnType2<T> = T extends ( ...args: any[] ) => infer R ? R : any

// 这里面R的作用是是取函数签名返回值类型