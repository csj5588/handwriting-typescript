/**
 * 继承（inheritance）是一种链接类与类的层次模型。指的是一个类（称为子类，自接口）继承另一个类（父类、父接口）的功能
 * 并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。
 */

/**
 * is-a关系
 * 在知识表示、面向对象程序设计与面向对象设计的领域里，is-a（英语：subsumption，包含架构）指的是类的父子继承关系，例如类D是另一个类B的子类（类B是类D的父类）。
 * 换句话说，通常"D is a B"（B把D包含在内，或是D被包含在B内）指的是，概念体D物是概念体B物的特殊化，而概念体B物是概念体D物的一般化。举例来说，水果是苹果、橘子、芒果与其他水果的一般化。
 */

// 在ts中我们可以通过extends关键字实现继承

class Animal {
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name); // 调用父类的构造函数
  }

  move(distanceInMeters = 5) {
    console.log("Slinkthering");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
sam.move();
