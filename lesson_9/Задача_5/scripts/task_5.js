let userNumb = parseInt(prompt('Введіть кількість чисел в масиві', '10'))
let minNumb = parseInt(prompt('Введіть мінімальне число', '-50'))
let maxNumb = parseInt(prompt('Введіть максимальне число', '50'))
let arr = []
let product = 1

function generateNumbers(userNumb, minNumb, maxNumb) {
  for (let i = 0; i < userNumb; i++) {
    let num = minNumb + Math.floor(Math.random() * (maxNumb - minNumb + 1))
    arr.push(num)
  }

  for (const item of arr) {
    if (item > 0) {
      product *= item
    }
  }

  return arr, product
}

generateNumbers(userNumb, minNumb, maxNumb)
document.write(
  `Згенерований масив: ${arr} <br>
  Добуток додатніх чисел: ${product}`
)
