// declare type ClassDecorator = <TFunction extends Function>(
//   target: TFunction
// ) => TFunction | void;

// 类装饰器顾名思义。它接收一个参数 target: TFuntion - 被装饰类
// 举个例子
function Greeter(target: Function): void {
  target.prototype.greet = function(): void {
    console.log("Hello Semlinker");
  };
}

@Greeter
class Greeting {
  constructor() {
    //
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: "Hello Semlinker"