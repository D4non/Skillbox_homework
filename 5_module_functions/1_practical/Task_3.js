function arrSort(array){
    for (let i = 0; i < ((array.length)-1); i++){
        for (let j = (i+1); j < array.length; j++){
            if (array[i] > array[j]){
                let meaning = array[i]
                array[i] = array[j]
                array[j] = meaning
            }
        }
    }

    return array
}

let result = arrSort([2, 5, 1, 3, 4])
console.log(result)