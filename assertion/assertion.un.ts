/**
 * 非空断言
 * 在上下文中当类型检查器无法断定类型时，一个新当后缀表达式操作符！可以用户断言操作对象是非null和非undefined类型
 * 。具体而言 。 x！将从x值域中排除null和undefined.
 * 
 * 那么非空断言操作符到底有什么用呢？下面我来先来看一下非空断言操作符当一些使用场景。
 */

// 忽略undefined和null类型
function myFunc(mybeString: string | undefined | null) {
  const onlyString: string = mybeString; // Error
  const ignoreUndefinedAndNull: string = mybeString!; // OK
}

myFunc(undefined)

// 调用函数时忽略undefined类型
type NumGenerator = () => number;

function myFuncs(numGenerator: NumGenerator | undefined) {
  const num1 = numGenerator(); // Error;
  const num2 = numGenerator()!; // OK
  console.log(num1)
}

// 因为！非空断言操作符会从编译生成的Javascript代码中移除，所以在实际使用过程中，要特别注意。比如下面这个例子。
const a: number | undefined = undefined;
const b: number = a!;
console.log(b)

// 以上的TS代码会编译成以下ES5代码：
// const a = undefined;
// const b = a;
// console.log(b);

/**
 * 虽然在TS代码中，我们使用了非空断言，使得const b: number = a!; 语句可以通过Typescript类型检查器的检查
 * 但是生成的ES5代码中，！非空断言操作符被移除了，所以在浏览器中执行以上代码，在控制台会输出undefined。
 */