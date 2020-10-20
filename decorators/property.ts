/**
 * 属性装饰器
 */

// 属性装饰器声明：
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

// 属性装饰器顾名思义，用来装饰类的属性。它接收两个参数：
// target: Object - 被装饰的类
// propertyKey: string | symbol - 被装饰类的属性名

function logProperty(target: any, key: string) {
  delete target[key];

  const backingField = "_" + key;

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true,
  });

  // property getter
  const getter = function(this: any) {
    const currVal = this[backingField];
    console.log(`Get: ${key} => ${currVal}`);
    return currVal;
  }

  // property setter
  const setter = function(this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`);
    this[backingField] = newVal;
  }

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  })
}

class Person {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;    
  }
}

const p1 = new Person("Semlinker");
p1.name = "inke";

// 以上代码我们定义了一个logProperty函数，来跟踪用户对属性对操作，当代码成功运行后，在控制台会输出以下结果：