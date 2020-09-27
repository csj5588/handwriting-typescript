/**
 * 函数重载
 * 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
 */
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//   // type Combinable = string | number;
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    };
    return Calculator;
}());
var calculator = new Calculator();
var result = calculator.add('Semlinker', ' Kakuqo');
