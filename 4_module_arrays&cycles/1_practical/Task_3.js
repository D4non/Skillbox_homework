let count = 7
array = []
for (let i = 0; i < count; i++){
    array[i] = i + 1
}

for (let i = 0; i < count; i++){
    j = Math.round(Math.random() * (count-1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

console.log(array)

let number = 10
let isFind = false
let index = 0

while (index < count){
    if (array[index] == number){
        isFind = true
        break
    }
    index++
}

console.log(isFind ? `Индекс элемента = ${index}` : `Элемент не найден`)