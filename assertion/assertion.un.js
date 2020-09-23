/**
 * 非空断言
 * 在上下文中当类型检查器无法断定类型时，一个新当后缀表达式操作符！可以用户断言操作对象是非null和非undefined类型
 * 。具体而言 。 x！将从x值域中排除null和undefined.
 *
 * 那么非空断言操作符到底有什么用呢？下面我来先来看一下非空断言操作符当一些使用场景。
 */
// 忽略undefined和null类型
function myFunc(mybeString) {
    var onlyString = mybeString; // Error
    var ignoreUndefinedAndNull = mybeString; // OK
}
myFunc(undefined);
function myFuncs(numGenerator) {
    var num1 = numGenerator(); // Error;
    var num2 = numGenerator(); // OK
    console.log(num1);
}
