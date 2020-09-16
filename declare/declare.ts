/**
 * Typescript作为javascript的超集，在开发过程中不可避免要引用其他第三方的javascript库，虽然通过直接引用可以调用库的类和方法
 * 但是却无法使用Typescript诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留到处类型声明，
 * 而产生了一个描述Javascript库和模块信息的声明文件，通过引用这个声明文件，就可以借用Typescript的各种特性来使用库文件了。
 * 加入我们想使用第三方库，比如jQuery，我们通常这样获取一个id是foo的元素：
 */
// $('#foo');
// // 或
// jQuery('#foo');

// 但是在Typescript中，我们并不知道$或jQuery是什么东西；
// 这时，我们需要使用declare关键字来定义它的类型，帮助Typescript判断我们传入的参数类型对不对。
declare var jQuery: (selector: string) => any;

jQuery('#foo');

// declare定义的类型只会用于编译时的检查，编译结果中会被删除。
// 上例的编译结果是：
// jQuery('#foo');
