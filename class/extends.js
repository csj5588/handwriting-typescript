/**
 * 继承（inheritance）是一种链接类与类的层次模型。指的是一个类（称为子类，自接口）继承另一个类（父类、父接口）的功能
 * 并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * is-a关系
 * 在知识表示、面向对象程序设计与面向对象设计的领域里，is-a（英语：subsumption，包含架构）指的是类的父子继承关系，例如类D是另一个类B的子类（类B是类D的父类）。
 * 换句话说，通常"D is a B"（B把D包含在内，或是D被包含在B内）指的是，概念体D物是概念体B物的特殊化，而概念体B物是概念体D物的一般化。举例来说，水果是苹果、橘子、芒果与其他水果的一般化。
 */
// 在ts中我们可以通过extends关键字实现继承
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slinkthering");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var sam = new Snake("Sammy the Python");
sam.move();
