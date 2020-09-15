
// Tuple类型 元组
// 类型和个数错误都会导致报错。
/**
 * tuple（元组）的应用场景主要有三个：
 * 1.函数的参数和返回值，一个函数可以接收任意多个参数，一次返回多个数据；
 * 2.格式字符串；
 * 3.让列表不可以被修改，保护数据
 */
let tupleType: [string, boolean];
tupleType = ["semlinker", false];
console.log(tupleType);