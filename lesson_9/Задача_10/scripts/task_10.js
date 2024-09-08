let userNumbPriceTags = parseInt(prompt('Введіть кількість цінників', '5'))
let taxAmount = 0
let tax = 0.2
let arrPrice = []

for (let i = 0; i < userNumbPriceTags; i++) {
  let userPrice = parseFloat(prompt('Введіть ціни на товари', '1000'))
  arrPrice.push(userPrice)
}

let taxPaid = arrPrice.map((price) => taxAmount += price * 0.2)

document.write(
  `Сплачений податок складає ${taxAmount}грн.`
)