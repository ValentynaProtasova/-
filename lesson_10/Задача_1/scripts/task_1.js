let userNumber = parseInt(prompt('Введіть за який період', '10'))
let minNumber = 1
let maxNumber = 10000
let arrRandomNumber = []

document.write(`Згенерований масив: `)
function getRandomNumber(userNumber, minNumber, maxNumber) {
  for (let i = 0; i < userNumber; i++) {
    let num = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
    arrRandomNumber.push(num)
    document.write(`${num}, `)
  }
}

getRandomNumber(userNumber, minNumber, maxNumber)
// ----1----
let moreThanThousand = arrRandomNumber.filter((numb) => numb > 1000)
// ----2----
let numberMoreThanThousand = arrRandomNumber.reduce(
  (newArr, el, index) =>{
    if(el > 1000) {
      newArr.push(index)
    }
    return newArr
  }, []
)
// ----3----
let moreThanPreviousValue = arrRandomNumber.filter(
  (el, index, baseArr) => el > baseArr[0]
)
// ----4----
let maxPrice = arrRandomNumber.reduce(
  (prevMax, el) => (el > prevMax ? el : prevMax)
)
let priceInPercent = arrRandomNumber.map(
  (el) => (el * 100 / maxPrice).toFixed()
  ) 
// ----5----
let numberOfChanges = priceInPercent.reduce(
  (count, el, index, arr) => index > 0 && el !== arr[index - 1] ? count + 1 : count, 0
)
// ----6----
let lessThanThousand = arrRandomNumber.some(
  (el) => el < 1000
)
// ----7----
let allLessThousand = arrRandomNumber.every(
  (el) => el > 1000
)
// ----8----
let priceMoreThousand = arrRandomNumber.reduce(
  (count, el) => (el > 1000 ? count + 1 : count),0
)
// ----9----
let sumElementMoreThousand = arrRandomNumber.reduce(
  (sum, el) => el > 1000 ? sum + el : sum
)
// ----10----
let firstPriceMoreThanThousand = arrRandomNumber.find(
  (el) => el > 1000
)
// ----11----
let indexFirstPriceMoreThanThousand = arrRandomNumber.findIndex(
  (el) => el > 1000
)
// ----12----
let lastPriceMoreThanThousand = arrRandomNumber.findLast(
  (el) => el > 1000
)
// ----13----
let indexLastPriceMoreThanThousand = arrRandomNumber.findLastIndex(
  (el) => el > 1000
)

document.write(`<ul>
  <ol>
    <li>Новий масив, у якому ціни більші за 1000грн. <br> ${moreThanThousand}</li>
    <li>Новий масив, у якому номери більших за 1000грн. <br> ${numberMoreThanThousand}</li>
    <li>Список цін, які більші за попереднє значення. <br> ${moreThanPreviousValue} </li>
    <li>Новий масив, який містить значення цін у відсотках стосовно максимального.<br> 
        Максимальне значення = ${maxPrice} <br>
        ${priceInPercent} </li>
    <li>Кількість змін цін = ${numberOfChanges}</li>
    <li>Чи є ціна менше 1000. <br> ${lessThanThousand} </li>
    <li>Чи усі ціни більше 1000. <br> ${allLessThousand} </li>
    <li>Кількість цін більших за 1000. <br> ${priceMoreThousand} </li>
    <li>Сума цін більших за 1000 = ${sumElementMoreThousand} </li>
    <li>Перша ціна, яка більша за 1000. <br> ${firstPriceMoreThanThousand} </li>
    <li>Індекс першої ціни, яка більша за 1000. <br> ${indexFirstPriceMoreThanThousand} </li>
    <li>Остання ціна, яка більша за 1000. <br> ${lastPriceMoreThanThousand} </li>
    <li>Індекс останньої ціни, яка більша за 1000. <br> ${indexLastPriceMoreThanThousand} </li>
  </ol>
</ul>
`)

