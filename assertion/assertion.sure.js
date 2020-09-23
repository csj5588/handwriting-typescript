/**
 * 在Typescrtipt2.7版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个！号
 * 从而告诉Typescript该属性会被明确的赋值。为了更好地理解它的作用，我们来看个具体的例子；
 */
var x;
initialize();
console.log(2 * x); //Error
function initialize() {
    x = 10;
}
