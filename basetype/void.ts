// void类型与any类型相反，它表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值类型是void；
function warnUser(): void {
  console.log('this.is my warning message');
}

// 需要注意的是，生命一个void类型的变量没有什么作用，因为他得知真难过为undefined或者null
let unusable: void = undefined;
let unusableNull: void = null;