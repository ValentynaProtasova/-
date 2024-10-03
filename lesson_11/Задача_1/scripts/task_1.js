let userRowNumb = parseInt(prompt('Введіть кількість рядків','4'))
let userColNumb = parseInt(prompt('Введіть кількість стовбців','4'))
let userMinNumb = parseInt(prompt('Введіть мінімальне число','1'))
let userMaxNumb = parseInt(prompt('Введіть максимальне число','500'))
const table = []

// ----0.генеруємо двовимірний масив----
function getRandomNumb(userMinNumb, userMaxNumb) {
  return userMinNumb + Math.floor(Math.random() * (userMaxNumb - userMinNumb + 1))
}

function generateRandomArry(arrayLength, userMinNumb, userMaxNumb) {
  const arr = []
  for (let i = 0; i < arrayLength; i++) {
    const randNumb = getRandomNumb(userMinNumb, userMaxNumb)
    arr.push(randNumb)
  }
  return arr
}

function generateRandomTable(userRowNumb, userColNumb, userMinNumb, userMaxNumb) {
  for (let i = 0; i < userRowNumb; i++) {
    const randomRow = generateRandomArry(userColNumb, userMinNumb, userMaxNumb)
    table.push(randomRow)
  }
  return table
}
console.log(generateRandomTable(userRowNumb, userColNumb, userMinNumb, userMaxNumb))

// -----1.Сума рядків від 0 до половини, стовпці від 0 до половини-----
function getSumFirstQuarter(table) {
  let halfRowTable = Math.floor(table.length / 2)
  let sum = 0
  for (let rowIndex = 0; rowIndex < halfRowTable; rowIndex++) {
    let halfColumnTable = Math.floor(table[rowIndex].length / 2)
    for (let colIndex = 0; colIndex < halfColumnTable; colIndex++) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumFirstQuarter = getSumFirstQuarter(table)

// -----2.Сума рядків від 0 до половини, стовпці від половини до кінця-----
function getSumSecondQuarter(table) {
  let halfRowTable = Math.floor(table.length / 2)
  let sum = 0
  for (let rowIndex = 0; rowIndex < halfRowTable; rowIndex++) {
    let halfColumnTable = Math.floor(table[rowIndex].length / 2)
    for (let colIndex = halfColumnTable; colIndex < table[rowIndex].length; colIndex++) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumSecondQuarter = getSumSecondQuarter(table)

// -----3.Сума рядків (від половини до кінця, стовпці від 0 до половини-----
function getSumThirdQuarter(table) {
  let halfRowTable = Math.floor(table.length / 2)
  let sum = 0
  for (let rowIndex = halfRowTable; rowIndex < table.length; rowIndex++) {
    let halfColumnTable = Math.floor(table[rowIndex].length / 2)
    for (let colIndex = 0; colIndex < halfColumnTable; colIndex++) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumThirdQuarter = getSumThirdQuarter(table)

// -----4.Сума рядків від половини до кінця ,стовпці від половини до кінця-----
function getSumFourthQuarter(table) {
  let halfRowTable = Math.floor(table.length / 2)
  let sum = 0
  for (let rowIndex = halfRowTable; rowIndex < table.length; rowIndex++) {
    let halfColumnTable = Math.floor(table[rowIndex].length / 2)
    for (let colIndex = halfColumnTable; colIndex < table.length; colIndex++) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumFourthQuarter = getSumFourthQuarter(table)

// -----5.Сума парних рядків-----
function getSumEvenRows(table) {
  let sum = 0
  for (let rowIndex = 0; rowIndex < table.length; rowIndex+=2) {
    for (let colIndex = 0; colIndex < table[rowIndex].length; colIndex++) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumEvenRows = getSumEvenRows(table)

// -----6.Сума непарних стовпців-----
function getSumOddColumns(table) {
  let sum = 0
  for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
    for (let colIndex = 1; colIndex < table[rowIndex].length; colIndex+=2) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumOddColumns = getSumOddColumns(table)

// -----7.Сума у парних рядках – непарних стовпців, у непарних – парних-----
// -----7.1 у парних рядках – непарних стовпців-----
function getSumEvenRowsOddColumns(table) {
  let sum = 0
  for (let rowIndex = 0; rowIndex < table.length; rowIndex+=2) {
    for (let colIndex = 1; colIndex < table[rowIndex].length; colIndex+=2) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumEvenRowsOddColumns = getSumEvenRowsOddColumns(table)

// -----7.2 у непарних – парних-----
function getSumOddRowEvenColumns(table) {
  let sum = 0
  for (let rowIndex = 1; rowIndex < table.length; rowIndex+=2) {
    for (let colIndex = 0; colIndex < table[rowIndex].length; colIndex+=2) {
      sum += table[rowIndex][colIndex]
    }
  }
  return sum
}
let sumOddRowEvenColumns = getSumOddRowEvenColumns(table)

document.write(`
<ul>
  <ol>
    <li>Сума рядків від 0 до половини, стовпці від 0 до половини = ${sumFirstQuarter}<br></li>
    <li>Сума рядків від 0 до половини, стовпці від половини до кінця = ${sumSecondQuarter}<br></li>
    <li>Сума рядків (від половини до кінця, стовпці від 0 до половини = ${sumThirdQuarter}<br></li>
    <li>Сума рядків від половини до кінця ,стовпці від половини до кінця = ${sumFourthQuarter}<br></li>
    <li>Сума парних рядків = ${sumEvenRows}<br></li>
    <li>Сума непарних стовпців = ${sumOddColumns}<br></li>
    <li>Сума у парних рядках – непарних стовпців = ${sumEvenRowsOddColumns}, у непарних рядках – парних стовбців = ${sumOddRowEvenColumns}<br></li>
  </ol>
</ul>
`)