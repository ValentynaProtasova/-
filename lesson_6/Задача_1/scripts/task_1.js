let userInitialNumb = parseInt(prompt('Введіть початкове число', '1'))
let userFinalNumb = parseInt(prompt('Введіть кінцеве число', '10'))
let sum = 0

document.write(`Непарні числа з ${userInitialNumb} до ${userFinalNumb} це`)

for (let i = userInitialNumb; i <= userFinalNumb; i++) {
  if (i % 2 !== 0) {
    document.write(` ${i},`)
    sum += i
  }
}

document.write(`<br> Їх сума = ${sum}`)