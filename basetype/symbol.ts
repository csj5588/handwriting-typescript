
// symbol
const sym = Symbol();
let obj = {
  [sym]: 'semlinker',
};

console.log(obj[sym]);
