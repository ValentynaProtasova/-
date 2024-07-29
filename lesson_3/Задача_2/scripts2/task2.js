let productPrice = parseFloat(prompt('Введіть ціну товару','0'))
let amoundOfMoney = parseFloat(prompt('Введіть кількість грошей','0'))
let balance = amoundOfMoney - productPrice

if (balance >= 4) {
  document.write('Дякую, що купили наш товар! Ви також можете придбати лотерею за 4 грн.')
} else if (balance < 0) {
  document.write('Недостатньо коштів для покупки товару!')
} else {
  document.write('Дякую, що купили наш товар!')
}