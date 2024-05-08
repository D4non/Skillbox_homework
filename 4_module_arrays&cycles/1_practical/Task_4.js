arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
arr2 = [12, 44, 23, 5]

arr3 = arr1
for (i = 0; i < arr2.length; i++){
    arr3.push(arr2[i])
}

console.log(arr3)