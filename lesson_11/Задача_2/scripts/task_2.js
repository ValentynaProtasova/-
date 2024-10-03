let numberOfStores = parseInt(prompt('Введіть кількість магазинів','2'))
let minValue = parseInt(prompt('Введіть мінімальний прибуток','100'))
let maxValue = parseInt(prompt('Введіть максимальний прибуток','300'))
let dayOfTheWeek = 7
let rowsNumber = numberOfStores
let columnsNumber = dayOfTheWeek
let arrayLength = dayOfTheWeek
const tablePrices = []

//-----генеруємо прибуток магазинів-----
function getRandomNumber(minValue, maxValue) {
  return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
}

function generateRandomArray(arrayLength, minValue, maxValue) {
  const arr = []
  for (let i = 0; i < arrayLength; i++) {
    const randNum = getRandomNumber(minValue, maxValue)
    arr.push(randNum)
  }
  return arr
}

function generateRandomTable(rowsNumber, columnsNumber, minValue, maxValue) {
  for (let i = 0; i < rowsNumber; i++) {
    const randomRow = generateRandomArray(columnsNumber, minValue, maxValue)
    tablePrices.push(randomRow)
  }
  return tablePrices
}
console.log(generateRandomTable(rowsNumber, columnsNumber, minValue, maxValue))

// ----1.Загальний прибуток кожного магазину за тиждень----
let profitForWeek = tablePrices.map(
  (week) => week.reduce(
    (sum, day) => sum + day, 0
  )
)
// ----2.Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)----

// ----3.Загальний прибуток за робочі дні----
function getTotalProfitForWorkingDays(tablePrices) {
  let sum = 0
  for (let colIndex = 0; colIndex < 5; colIndex++) {
    for (let rowIndex = 0; rowIndex < tablePrices.length; rowIndex++) {
      sum += tablePrices[rowIndex][colIndex]
    }
  }
  return sum
}
let profitForWorkingDays = getTotalProfitForWorkingDays(tablePrices)

// ----4.Загальний прибуток за вихідні дні.----
function getTotalProfitForWeekend(tablePrices) {
  let sum = 0
  for (let colIndex = 5; colIndex < 7; colIndex++) {
    for (let rowIndex = 0; rowIndex < tablePrices.length; rowIndex++) {
      sum += tablePrices[rowIndex][colIndex]
    }
  }
  return sum
}
let totalProfitForWeekend = getTotalProfitForWeekend(tablePrices) 

// ----5.Максимальний прибуток за середу.----
function getMaxProfitForWednesday(tablePrices) {
  let arrWednesday = []
  for (let rowIndex = 0; rowIndex < tablePrices.length; rowIndex++) {
    arrWednesday.push(tablePrices[rowIndex][2])
  }
  let maxProfitForWednesday = arrWednesday.reduce(
    (prevMax, profitWednesday) => (profitWednesday > prevMax ? profitWednesday : prevMax),0
  )
  return maxProfitForWednesday
}
let maxProfitForWednesday = getMaxProfitForWednesday(tablePrices)

// ----6.Загальний список (одновимірний масив) зі значенням, які що більші за 200.----
let valuesGreaterThan200 = tablePrices.flat(Infinity).filter(
  (price) => price > 200
)
// ----7.Відсортовані кожні тиждні за зростанням.----
let sortEachWeekByGrowth = tablePrices.map(
  (weeksProfit) => weeksProfit.slice().sort((profit1, profit2) => profit1 - profit2)
)
console.log(sortEachWeekByGrowth)

// ----8.Відсортовані тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку).----
let sortWeeksByMaxElement = sortEachWeekByGrowth.slice().sort(
  (week1, week2) => {
  let weekMax1 = Math.max(...week1)
  let weekMax2 = Math.max(...week2)
  return weekMax2 - weekMax1
})
console.log(sortWeeksByMaxElement)

// ----9.Упорядкувані тижні (рядки) за спаданням суми елементів у рядку.----
profitForWeek.sort(
  (storeProfit1, storeProfit2) => storeProfit2 - storeProfit1
)

document.write(`
<ul>
  <ol>
    <li>Загальний прибуток кожного магазину за тиждень.<br>${profitForWeek}<br></li>
    <li>Загальний прибуток за робочі дні.<br>${getTotalProfitForWorkingDays(tablePrices)}<br></li>
    <li>Загальний прибуток за вихідні дні.<br>${totalProfitForWeekend}<br></li>
    <li>Максимальний прибуток за середу.<br>${maxProfitForWednesday}<br></li>
    <li>Загальний список (одновимірний масив) зі значенням, які що більші за 200.<br>${valuesGreaterThan200}<br></li>
    <li>Відсортовані кожні тиждні за зростанням.<br>Результат в консолі.<br></li>
    <li>Відсортовані тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку).<br>Результат в консолі.<br></li>
    <li>Упорядкувані тижні (рядки) за спаданням суми елементів у рядку.<br><br></li>
  </ol>
</ul>
`)