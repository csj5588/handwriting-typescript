
// unknown 顶级类型
// unknown 类型只能被赋值给any类型和unknown类型本身。只有任意类型的容器可以赋值给任意类型。
let value: unknown;
value = true;
value = 43;

// let value: unknown;

// 同样的类似any的全类型操作就报错了，通过将any类型改为unknown类型，我们已经将允许所有更改的默认设置，更改为禁止任何更改。

// value.foo.bar; // Error
// value.trim(); // Error
// value(); // Error
// new value(); // Error
// value[0][1]; // Error
