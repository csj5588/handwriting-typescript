// implements 用户限制类的写法

interface test {
  name: string;
  go(str: string): void;
}

class newTest implements test {
  // 这里面就必须有test设定的方法和参数
}
