let amountTemp = parseInt(prompt('Введіть кількість показників температур','5'))

function getMinusTemp () {
  let minusTemp = 0
  for (let amount = 1; amount <= amountTemp; amount++) {
    let temp = parseInt(prompt('Введіть температуру','-5'))

    if (temp < 0) {
      minusTemp ++
    }
  }

  return minusTemp
}

let result = getMinusTemp ()
document.write(`${result} показника(ів) температур нижче нуля`)
