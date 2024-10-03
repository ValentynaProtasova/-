const rowNumb = 6
const colNumb = 6
const ships = 5
let shotRemaining = 10

let battleField = []

function getBattlefield() {
  for (let rowIndex = 0; rowIndex < rowNumb; rowIndex++) {
    let row = []
    for (let colIndex = 0; colIndex < colNumb; colIndex++) {
      row.push(0)
    }
    battleField.push(row)
    }
  return battleField
}
getBattlefield(rowNumb, colNumb)
console.log(battleField)

function placedShip() {
  let placedShip = 0
  while(placedShip < ships){
    let row = Math.floor(Math.random() * rowNumb)
    let col = Math.floor(Math.random() * colNumb)
    if (battleField[row][col] === 0) {
      battleField[row][col] = 1
      placedShip++
    }
  }
}

function game() {
  placedShip()

  while (shotRemaining > 0 && ships > 0) {
    let userRow = parseInt(prompt('Введіть номер рядка від 1 до 6','1'))
    let userCol = parseInt(prompt('Введіть номер стовбця від 1 до 6','1'))

    if (userRow < 0 || userRow > rowNumb || userCol < 0 || userCol > colNumb) {
      alert('Некоректні координати')
      continue
    }
  
    if (battleField[userRow - 1][userCol - 1] === 1) {
      alert('Вітаю! Ви влучили в корабель!')
      battleField[userRow - 1][userCol - 1] = -1
      shotRemaining--
    } else if (battleField[userRow - 1][userCol - 1] === 0) {
      alert('Ви промахнулися!')
    }
    shotRemaining--
  }

  if (ships === 0) {
   return 'Поздоровляю! Ви потопили всі кораблі!'
  } else {
  return 'Ви програли!'
  }
}

game()