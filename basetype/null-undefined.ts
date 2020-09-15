// typescript中有这两种类型
let u: undefined = undefined;
let n: null = null;

// 默认情况下null和undefined是所有类型的子类型，就是说你可以把null和undefined赋值给number类型的变量，然而，如果你制定了 --strictNullCheckes标记，null和undefined只能赋值给void和他们格子的类型了。
