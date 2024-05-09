function getAge(userAge = 2000){
    let currentYear = new Date().getFullYear()
    return currentYear - userAge
}

console.log(getAge(1998))
console.log(getAge(1991))
console.log(getAge(2007))