
/**
 * Extend
 * 接口和类型别名都能够被扩展，但语法有所不同，此外，接口和类型别名不是互斥但。
 * 接口可以扩展类型别名，而反过来不行。
 */

// interface extends interface
interface ParX { x: number }
interface Point extends ParX {
  y: number
}

const flg2: Point = {
  x: 1,
  y: 2,
}

// type alias extends type alias
type ParX2 = { x: number };

type Point2 = ParX2 & { y: number };

// interface extends type alias
type ParX3 = { x: number };
interface Point3 extends ParX3 {
  y: number;
}

// type alias extends interface
interface ParX4 { x: number };
type Point4 = ParX4 & { y: number };