/**
 * 参数装饰器声明：
 * declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
 * 参数装饰器顾名思义，是用来装饰函数参数，它接收三个参数
 * 
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 方法名
 * parameterIndex: number - 方法中参数的索引值
 */

function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name;
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} hasbeen decorated`);
}

class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
    this.greeting = phrase;
  }
}