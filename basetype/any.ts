
// any  全局超级类型 - 顶级类型
let notSure: any = 555;
notSure = "semlinker";
notSure = false;

// any全类型操作
let anyValue: any;

// anyValue.foo; // ok
anyValue.trim(); // ok
anyValue(); // ok
new anyValue(); // ok
anyValue[0][1]; // ok
