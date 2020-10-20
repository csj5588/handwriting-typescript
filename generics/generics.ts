/** [dʒɪˈnɛrɪks] 
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵动的功能
 * 
 * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
 * 这样用户就可以以自己的数据类型来使用组件
 * 
 * 设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
 * 
 * 泛型是允许同一个函数接收不同类型参数的一种模板。
 * 相比于使用any类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
 */

/**
 * 泛型语法
 * 
 * 对于刚接触Typescript泛型的读者来说，首次看到<T>语法会感到陌生，其实它没有什么特别，就像传递参数一样，
 * 我们传递了我们想要用于特定函数调用的类型
 */

function identity <T>(value: T) : T {
  return value;
}

/**
 * 其中T代表type，在定义泛型时通常用作第一个类型变量名称，但实际上T可以用任何有效名称代替。除了T以外
 * 以下是常见的泛型变量代表的意思：
 * K（key）：表示对象中的建类型
 * V（value）：表示对象中的值类型
 * E（Element）：表示元素类型
 * 
 * 其实并不是只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量。比如我们引入一个新的类型变量U，
 * 用于扩展我们定义的identity函数：
 */

function idientity2 <T, U>(value: T, message: U) : T {
  console.log(message);
  return value
}

// 这里我们可以省略尖括号
console.log(idientity2<number, string>(43, "semlinker"));