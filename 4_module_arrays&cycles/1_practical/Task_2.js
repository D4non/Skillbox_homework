let count = 7
let array = []
for (let i = 0; i < count; i++){
    array[i] = i + 1
}

console.log(array)

for (let i = 0; i < count; i++){
    let j = Math.round(Math.random() * (count-1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

console.log(array)