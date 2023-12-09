let a = 13.123456789;
let b = 2.123;
let n = 5;

a = Math.floor((a - Math.floor(a)) * Math.pow(10, n))
b = Math.floor((b - Math.floor(b)) * Math.pow(10, n))

console.log(a, b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a === b)
console.log(a !== b)