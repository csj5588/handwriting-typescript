/**
 * 类型别名用来给一个类型起个新名字
 */

type Message = string | string[];

let greet = (message: Message) => {
  // ...
}

// 就是上面这种情况，其实可以直接写里面，但是我们用type描述了一个规范直接规范住类型即可，也属于联合模式
// 个人认为联合模式union是一种“或”操作。