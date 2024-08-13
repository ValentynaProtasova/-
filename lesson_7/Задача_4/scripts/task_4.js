let evenNumb =0
let positiveNumb = 0
let moreThanHundred = 0
let result

function getResult() {
  for (let i = 1; i <= 3; i++) {
    let numb = parseInt(prompt('Введіть число','1'))

    if (numb % 2 === 0) {
      evenNumb ++
    } if (numb > 0) {
      positiveNumb ++
    } if (numb > 100) {
      moreThanHundred ++
    }
  }
}

getResult()
document.write(
  `Парних чисел = ${evenNumb} <br>
  Додатніх чисел = ${positiveNumb} <br>
  Чисел більших за 100 = ${moreThanHundred}`
)