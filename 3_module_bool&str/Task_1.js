let password = '4321_';

let result = ((password.length >= 4) && ((password.includes('_')) || (password.includes('-')))) ? "Пароль надёжный" : "Пароль недостаточно надёжный"
console.log(result)