/**
 * 断言类型
 *
 * 当你笔Typescript更了解某个值的详细信息，通常这会发生在你清楚滴知道一个实体具有比他现有类型更加确切的类型
 * 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和结构。
 * 它没有运行时的影响，只是在编译阶段起作用。
 *
 * 类型断言有两种形式；
 */
// 尖括号语法
var someValue = "this is a string";
var strLength = someValue.length;
console.log(someValue, strLength);
// as 语法
var strLength2 = someValue.length;
console.log(strLength2);
