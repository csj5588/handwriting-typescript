/**
 * 参数装饰器声明：
 * declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
 * 参数装饰器顾名思义，是用来装饰函数参数，它接收三个参数
 *
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 方法名
 * parameterIndex: number - 方法中参数的索引值
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, key, parameterIndex) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log("The parameter in position " + parameterIndex + " at " + functionLogged + " hasbeen decorated");
}
var Greeter = /** @class */ (function () {
    function Greeter(phrase) {
        this.greeting = phrase;
    }
    Greeter = __decorate([
        __param(0, Log)
    ], Greeter);
    return Greeter;
}());
