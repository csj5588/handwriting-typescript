/**
 * 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过extends关键字添加泛型约束
 */

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 3, value: 3 }); // Error, number doesn't hava a length property;