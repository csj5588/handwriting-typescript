/**
 * TypeScript可辨识联合类型，也成为代数数据类型或标签联合类型。它包含3个要点：可辨识、联合类型和类型守卫
 * 
 * 这种类型的本质是结合联合类型和字面量类型的一种保护犯法。如果一个类型是多个类型的联合类型，
 * 且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
 */

// 可辨识
// 可辨识要求联合类型中的每个元素都含一个单例类型属性，比如：

// 一个枚举类型
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

// 三个形状定义
interface Motorcycle {
  vType: "motorcycle";
  make: number
}

interface Car {
  vType: "car";
  transmission: CarTransmission
}

interface Truck {
  vType: "truck";
  capacity: number
}

// 上述代码中我们分别定义了 Motocycle\car 和truck三个接口，在这些接口中都包含一个vType属性，该属性被成为可辨识的属性，而
// 其他的属性只跟特性的接口相关。

// 基于前面定义的三个接口，我们可以创建一个Vehicle联合类型

type Vehicle = Motorcycle | Car | Truck;