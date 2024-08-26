let userLines = parseInt(prompt('Введіть кількість ліній', '6'))
let str = ''
let abc = 'o'

for (let i = 0; i < userLines; i++) {
  str += abc
  document.write(`${str} <br>`)
}
