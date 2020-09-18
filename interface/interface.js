/**
 * interface是一种描述对象或者函数的东西。你可以把它理解为形状，一个对象需要什么样的属性，函数需要什么参数或者返回什么样的值，数组应该是什么样子，一个类
 * 和继承类需要符合什么样的描述等等，下文分七个部分，一起看一下对象接口、函数接口、可索引类型接口、类接口是如何定义的，以及接口的继承、
 * 定义混合类型的接口和继承类的接口是如何使用的？
 */
// 对象interface
// bool?: boolean // 就是非必须的意思 x?: y
var p1 = {
    name: 'oliver',
    bool: true,
    timestamp: +new Date(),
    arr: [1, 2, 3] // ✅设置只读数组。
};
console.log(p1);
var sum = function (x, y, desc) {
    if (desc === void 0) { desc = ''; }
    console.log(desc, x + y);
};
sum(32, 22);
console.log(undefined === void 0);
var arr1 = ['hello', 'world'];
console.log(arr1[0]);
