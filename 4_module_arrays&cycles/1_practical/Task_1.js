let arr = [];
let n = -3;
let m = -10;
let count = 42;

if (n > m){
    for (let i = 0; i < count; i++){
        arr[i] = Math.round(Math.random() * (n - m)) + m;
    }
} else {
    for (let i = 0; i < count; i++){
        arr[i] = Math.round(Math.random() * (m - n)) + n;
    }
}

console.log(arr)