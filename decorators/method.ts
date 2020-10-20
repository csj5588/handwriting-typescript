/**
 * 方法装饰器
 * 声明：
 */

// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypePropertyDescript<T>) => TypePropertyDescript<T> | void;

/**
 * 方法装饰器顾名思义，用来装饰类的方法，它接收三个参数：
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 方法名
 * descriptor：TypePropertyDescript - 属性描述符。
 */

function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log('wrapped function: before invoking' + propertyKey);
    let result = originalMethod.apply(this, args);
    console.log("wrapped function: after invoking " + propertyKey);
    return result;
  }
}

class Task {
  @log
  runTask(arg: any): any {
    console.log('runTask invoked, args: ' + arg);
    return "finished";
  }
}

let task = new Task();
let result = task.runTask('learn ts');
console.log('result: ' + result);
