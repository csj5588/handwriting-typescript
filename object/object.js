/**
 * 对象解构
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var person = {
    names: "Semlinker",
    gender: "Male"
};
var names = person.names, gender = person.gender;
console.log(gender, names);
/**
 * 对象展开运算符
 */
var person2 = {
    namess: "Semlinker",
    gender: "Male",
    address: "Xiamen"
};
// 组装对象
var personWithAge = __assign(__assign({}, person2), { age: 33 });
// 获取除了某些项以外的其它项。
var namess = person2.namess, rest = __rest(person2, ["namess"]);
console.log(namess, rest, personWithAge);
