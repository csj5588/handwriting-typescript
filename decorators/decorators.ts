/**
 * 装饰器是什么
 * 它是一个表达式
 * 该表达式被执行后，返回一个函数
 * 函数的入参分别为target、name和descriptor
 * 
 * 装饰器分类
 * 类装饰器
 * 属性装饰器
 * 方法装饰器
 * 参数装饰器
 * 
 * 需要注意的是，若要启用实验性的装饰器特性，你必须在命令行或者tsconfig.json里启用experimentalDecorators
 * 
 * 命令行
 * tsc --target ES5 --experimentalDecorators
 * 
 * tsconfig.json
 * {
 *   "compilerOptions": {
 *      "target": "ES5",
 *      "experimentalDecorators": true
 *    }
 * }
 */