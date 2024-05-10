let numbers = []
for (let i = 0; i < 31; i++){
    numbers[i] = i+1
}

let days_of_week = ["вторник", "среда", "четверг", "пятница", "суббота", "воскресенье", "понедельник"]

for (let j = 0; j < numbers.length; j++){
    let result = ((j+1)%7)-1 == -1 ? 6 : ((j+1)%7)-1
    console.log(`${numbers[j]} января, ${days_of_week[result]}`)
}