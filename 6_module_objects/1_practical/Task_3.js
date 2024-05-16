let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
  { name: 'Иван', surname: 'Сергеев' }
]

function filter(array, name, value) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i][name] == value){
      newArray.push(array[i])
    }
  }

  return newArray
}

let result = filter(objects, 'name', 'Иван')
console.log(result)