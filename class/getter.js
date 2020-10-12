/**
 * getter和setter使我们够更好地控制如何访问每个对象上的成员。
 * Typescript访问器要求我们将编译器设置为输出ECMAScript5 或更高，他不支持5
 * 具有get属性而没有任何set属性的访问器被自动认为是只读的。它在从我们的代码生成的d.ts文件时候很有用。
 */
let passcode = "secret passcode";
class Student {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("未经过授权更新学生详细资料");
        }
    }
}
let stud = new Student();
stud.fullName = "La Oreja";
if (stud.fullName) {
    console.log(stud.fullName);
}
