let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru']

function filter(whiteList, blackList){
    let new_array = []

    for (let i = 0; i < whiteList.length; i++){
        let count = 0
        for (let j = 0; j < blackList.length; j++){
            count = whiteList[i] == blackList[j] ? count += 1 : count
        }

        if (count == 0){
            new_array.push(whiteList[i])
        }
    }

    return new_array
}

let result = filter(whiteList, blackList)
console.log(result)