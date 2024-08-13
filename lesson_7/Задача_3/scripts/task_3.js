let numb1 = parseInt(prompt('Введіть перше число','1'))
let numb2 = parseInt(prompt('Введіть друге число','1'))
let numb3 = parseInt(prompt('Введіть трете число','1'))
let numb4 = parseInt(prompt('Введіть четверте число','1'))

function getAmound() {
  return (numb1 + numb2 + numb3 + numb4)
}
let amoundNumb = getAmound()

function getProductNumb() {
  return (numb1 * numb2 * numb3 * numb4)
}
let productNumb = getProductNumb()

function getArithmeticMeanNumb() {
  return ((numb1 + numb2 + numb3 + numb4) / 4)
}
let arithmeticMeanNumb = getArithmeticMeanNumb()


function getMinNumb() {
let minNumb = numb1

  if (numb1 < numb2) {
    numb2 = minNumb
  } else if (numb2 < numb3) {
    numb3 = minNumb
  } else if (numb3 < numb4) {
    numb4 = minNumb
  }
  return minNumb
}
let minNumber = getMinNumb()

document.write(
  `Сума чисел = ${amoundNumb} <br>
  Добуток чисел = ${productNumb} <br>
  Середнє арифметичне чисел = ${arithmeticMeanNumb} <br>
  Мінімальне значення чисел = ${minNumber}
  `)
