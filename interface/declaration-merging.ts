/**
 * 与类型别名不同，接口定义多次，会被自动合并为单个接口。
 */

interface Point { x: number }
interface Point { y: number }

// 自动合并了。
const point: Point = { x: 1, y: 2 };