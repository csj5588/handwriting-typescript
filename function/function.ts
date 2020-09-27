// 箭头函数
function Book() {
  this.publishdate = 2015;
  setInterval(() => {
    console.log(this.publishdate);
  }, 1000);
}

// 参数类型和返回类型
function CreateUserId(name: string, id: number): string {
  return name + id;
}

// 函数类型
let IdGenerator: (chars: string, nums: number) => string;

function CreateUserId2(name: string, id: number): string {
  return name + id;
}

IdGenerator = CreateUserId;

// 可选参数及默认参数
function CreateUserId3(name: string, id: number, age?: number): string {
  return name + id;
}

// 默认参数
function CreateUserId4(
  name: string = "semlinker",
  id: number,
  age?: number
): string {
  return name + id;
}

// 在函数声明时，可以通过？来定义可选参数，比如age?: number这种形式，在实际使用时，需要注意的是可选参数要放在普通参数后面，不然会导致编译错误。

// 剩余参数

function push(array, ...items) {
  items.forEach(item => {
    array.push(item);
  })
}

let a = [];
push(a, 1, 2, 3)