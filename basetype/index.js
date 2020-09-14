// boolean
var isDone = false;
// number
var count = 10;
// string
var names = 'semliker';
// symbol
// const sym = Symbol();
// let obj = {
//   [sym]: 'semlinker',
// };
// console.log(obj[sym]);
// array
var list = [1, 2, 3];
var list2 = [1, 2, 3]; // Array<number>泛型语法。
// enum
// 通过观察数字枚举和字符串枚举的编译结果，我们可以知道数字枚举除了支持
// 从成员名称到成员值 的普通映射之外，它还支持 从成员值到成员名称 的反向映射：
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 3] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction[Direction["EAST"] = void 0] = "EAST";
    Direction[Direction["WEST"] = void 0] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
console.log(dir);
console.log(Direction);
console.log(Direction['0']);
