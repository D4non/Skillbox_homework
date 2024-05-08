let userName = "DanIIl"
let userSurname = "Pisarev"

userNameResult = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase()
userSurnameResult = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase()

console.log(userNameResult, userSurnameResult)

let resultName = userName == userNameResult ? "Имя осталось без изменений" : "Имя было преобразовано"
let resultSurname = userSurname == userSurnameResult ? "Фамилия осталось без изменений" : "Фамилия было преобразовано"

console.log(resultName)
console.log(resultSurname)