let str = "Hello, world!"
let arr = []

for (let i = 0; i<str.length; i++){
    arr[i] = str[i]
}

arr = arr.reverse()
new_str = ''

for (let i = 0; i<arr.length; i++){
    new_str += arr[i]
}

console.log(new_str)