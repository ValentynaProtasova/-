let minUserNumb = parseInt(prompt('Введіть число, яке буде мінімальним','1'))
let maxUserNumb = parseInt(prompt('Введіть число, яке буде максимальним','2'))
let oddNumb = 0

for (let i = minUserNumb; i <= maxUserNumb; i++) {
  if (i % 2 !== 0 ) {
    oddNumb ++
  }
}

document.write(`Кількість непарних чисел ${oddNumb}`)