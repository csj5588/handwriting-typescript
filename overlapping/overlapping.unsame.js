/**
 * 同名非基础类型属性的合并
 *
 * 在上面示例中，刚好接口X和接口Y中内部成员c的类型都是基本数据类型，那么如果是非基本数据类型的话，又会是什么情况。
 */
var abc = {
    x: {
        d: true,
        e: 'semlinker',
        f: 666
    }
};
console.log('abc', abc);
