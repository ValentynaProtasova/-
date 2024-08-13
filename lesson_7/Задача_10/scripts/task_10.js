let amountTemp = parseInt(prompt('Введіть кількість показників температур','5'))

function getMinusTemp () {
  let sumAboveZero = 0
  let countAboveZero = 0
  let averageTemp = 0

  for (let amount = 1; amount <= amountTemp; amount++) {
    let temp = parseInt(prompt('Введіть температуру','1'))

    if (temp > 0) {
      sumAboveZero += temp
      countAboveZero ++
    }
  }
  averageTemp = sumAboveZero / countAboveZero

  return averageTemp
}

let result = getMinusTemp()
document.write(`Середнє значення = ${Math.round(result)}`)