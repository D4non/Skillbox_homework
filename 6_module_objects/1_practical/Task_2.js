let allUsers=[
  {name: 'Валя', age: 11},
  {name: 'Таня',age: 24},
  {name: 'Рома',age: 21},
  {name: 'Надя', age: 34},
  {name: 'Антон', age: 7}
]


function getOlderUserArray(array){
  let ages = []

  for (let obj of allUsers){
    ages.push(obj.age)
  }

  let maxAge = Math.max.apply(null, ages)

  for (let obj of allUsers){
    if (obj.age == maxAge){
      return obj.name
    } else {
      continue
    }
  }
}

let result = getOlderUserArray(allUsers)
console.log(result)