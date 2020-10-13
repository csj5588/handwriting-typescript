/**
 * 用来获取一个变量声明 或 对象的类型
 */
var sem = { name: 'semlinker', age: 33 };
function toArray(x) {
    return [x];
}
console.log(JSON.stringify(typeof toArray));
