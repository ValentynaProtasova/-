let userNumb = parseInt(prompt('Введіть кількість чисел в масиві', '10'))
let minNumb = parseInt(prompt('Введіть мінімальне число', '1'))
let maxNumb = parseInt(prompt('Введіть максимальне число', '500'))
let arr = []
let arrMoreHundred = []

function generateNumbers(userNumb, minNumb, maxNumb) {
  for (let i = 0; i < userNumb; i++) {
    let num = minNumb + Math.floor(Math.random() * (maxNumb - minNumb + 1))
    arr.push(num)
  }

  for (const item of arr) {
    if (item > 100) {
      arrMoreHundred.push(item)
    }
  }

  return arr, arrMoreHundred
}

generateNumbers(userNumb, minNumb, maxNumb)
document.write(
  `Згенерований масив: ${arr} <br>
  Масив, де елементи більші за 100: ${arrMoreHundred}`
)
