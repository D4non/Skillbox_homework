let roadMines = [false, true, false, false, false, true, false, false, false, true]

mines = 0

for (let i = 0; i < roadMines.length; i++){
    mines = roadMines[i] == true ? mines+=1 : mines
    if (roadMines[i] && mines == 1){
        console.log("Танк повреждён!")
    }
    console.log(`Танк переместиося на ${i+1}`)
    if (mines == 2){
        console.log("Танк уничтожен!")
        break
    }
}