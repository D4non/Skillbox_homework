let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru']

function filter(whiteList, blackList){
    let new_array = []

    for (let i = 0; i < whiteList.length; i++){
        blackList.includes(whiteList[i]) == false ? new_array.push(whiteList[i]) : null
    }

    return new_array
}

let result = filter(whiteList, blackList)
console.log(result)