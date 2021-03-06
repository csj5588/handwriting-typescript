function greet(person: [string, number]) {
  return 'Hello,' + person;
}

console.log(greet(['TypeScript', 12]));

// 泛型

function greetf<T> (a: T): T {
  return a;
}

// console.log(greetf([1, 2, 3]))
// console.log(greetf<Array<number>>([1, 3, 2]));
// console.log(greetf<boolean>(false))