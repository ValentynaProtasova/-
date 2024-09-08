let userNumbPriceTags = parseInt(prompt('Введіть кількість цінників', '5'))
let arrPrice = []

for (let i = 0; i < userNumbPriceTags; i++) {
  let userPrice = parseFloat(prompt('Введіть ціни на товари', '1100'))
  arrPrice.push(userPrice)
}

arrPrice.forEach((el, index, baseArr) => {
    if(el > 1000) baseArr[index] = el * 0.7
  }
)
document.write(
  `Ціни на товари зі знижками: ${arrPrice}`
)