/**
 * 使用abstract关键字声明的类，我们称之为抽象类。
 * 抽象类不能被实例化，因为它里面包含一个或多个抽象方法
 * 所谓的抽象方法，是指不包含具体实现的方法
 */

abstract class Person {
  constructor(public name: string) {}

  abstract say(words: string) : void;
}

// no new Person;

/**
 * 抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类，如下
 */

class Developer extends Person {
  constructor(name: string) {
    super(name);
  }

  say(words: string) : void {
    console.log(`${this.name} says ${words}`);
  }
}

const lolo = new Developer("lolo");
lolo.say("inke");