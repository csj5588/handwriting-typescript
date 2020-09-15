
// enum
// 通过观察数字枚举和字符串枚举的编译结果，我们可以知道数字枚举除了支持
// 从成员名称到成员值 的普通映射之外，它还支持 从成员值到成员名称 的反向映射：
// 枚举类型常用场景为 常量枚举 - 对照表
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH;
console.log(dir);
console.log(Direction);
console.log(Direction['0']);
