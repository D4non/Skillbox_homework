let user1={
  name: 'Игорь',
  age: 21
 }

 let user2={
  name: 'Оля',
  age: 10
 }

 function getOlderUser(user1, user2) {
    if (user1.age > user2.age){
      return user1.name
    } else if (user1.age < user2.age) {
      return user2.name
    } else {
      return `${user1.name} и ${user2.name} одинакового возраста`
    }
 }

 let result = getOlderUser(user1, user2)
 console.log(result)