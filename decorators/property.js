/**
 * 属性装饰器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 属性装饰器声明：
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// 属性装饰器顾名思义，用来装饰类的属性。它接收两个参数：
// target: Object - 被装饰的类
// propertyKey: string | symbol - 被装饰类的属性名
function logProperty(target, key) {
    delete target[key];
    var backingField = "_" + key;
    Object.defineProperty(target, backingField, {
        writable: true,
        enumerable: true,
        configurable: true,
    });
    // property getter
    var getter = function () {
        var currVal = this[backingField];
        console.log("Get: " + key + " => " + currVal);
        return currVal;
    };
    // property setter
    var setter = function (newVal) {
        console.log("Set: " + key + " => " + newVal);
        this[backingField] = newVal;
    };
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Person.prototype, "name", void 0);
    return Person;
}());
var p1 = new Person("Semlinker");
p1.name = "inke";
