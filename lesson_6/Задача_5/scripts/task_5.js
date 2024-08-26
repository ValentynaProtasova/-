let userMinNumb = parseInt(prompt('Введіть мінімальне число','1'))
let userMaxNumb = parseInt(prompt('Введіть максимальне число','10'))

let oddNumb = ''
let sum = 0

for (let i = userMinNumb; i < userMaxNumb; i++) {
  if (i % 2 !== 0) {
    document.write(`${i}, `)
    oddNumb += i
    sum += i
  }
}

document.write(`<br>Сума непарних чисел = ${sum}`)