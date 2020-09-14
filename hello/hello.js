function greet(person) {
    return 'Hello,' + person;
}
console.log(greet("TypeScript"));
// 泛型
function greetf(a) {
    return a;
}
console.log(greetf([1, 2, 3]));
console.log(greetf(false));
console.log(greetf([1, 3, 2]));
