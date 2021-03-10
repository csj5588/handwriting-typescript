/**
 * 
 * 同名基础类型属性的合并
 * 那么现在问题来了，假设在合并多个类型的过程中，刚好出现某些类型存在相同的成员，但对应但类型又不一致，比如：
 */

interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: YX;

// 在上面代码中，接口X接口Y都含有一个相同的成员c，但他们的类型不一致，对于这种情况，此时XY类型或YX类型中成员c的类型
// 是不是可以是string或者number呢？比如下面的例子

// p = { c: 5, d: 'd', e: 'e' };

// 上面的工时会报一个never错误
// 混入后c的类型为 string & number 是不存在的 自动变为never