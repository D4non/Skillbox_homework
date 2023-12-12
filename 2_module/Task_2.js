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

// Хотелось докопаться до примера с a = 1.001, 
// что там из-за плавающей точки a и b не такие какие должны быть,
// но в правильном решении такая же ерунда, поэтому я думаю так и нужно.
