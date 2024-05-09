let cartTotal = 63000
let numberGoods = 43
let promotionalCod = 'ДАРИМ300'

function calculate(cartTotal, numberGoods, promotionalCod = null){
    let total = cartTotal
    promotionalCod == 'ДАРИМ300' ? total -= 300 : null
    numberGoods >= 10 ? total = (total * 95 / 100) : null
    total > 50000 ? total = 50000 + ((total - 50000) * 80 / 100) : null
    promotionalCod == 'СКИДКА15' && total >= 20000 ? total = (total * 85 / 100) : null

    return total
}

let result = calculate(cartTotal, numberGoods, promotionalCod)
console.log(result)