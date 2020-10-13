/**
 * 用于获取某种类型的所有键，其返回类型是联合类型。
 */

interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // name | age
// 后面这俩是啥玩意 没懂
type K2 = keyof Person[]; // length | toString | pop | push | concat | join
type K3 = keyof { [x: string]: Person }; // string | number

// 索引签名。数字索引｜字符串索引
interface StringArray {
  // 字符串索引 keyof StringArray => string | number;
  [index: string] : string
}

interface StringArray1 {
  // 数字索引 -> keyof StringArray1 => number
  [index: number]: string;
}

/**
 * 为了同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类。
 * 其中的原因即使当使用数值索引的时候，Javascript在执行索引操作时，会先把数值索引先转换为字符串索引。
 */