let sumTepm = 0

for (let monthNumb = 1; monthNumb <= 12; monthNumb++) {
  let tepmUser = parseInt(prompt('Введіть температуру за ${monthNumb}','1'))
  sumTepm += tepmUser
}

let avarageTepm = sumTepm / 12

document.write(`Середня температура за рік = ${avarageTepm}`)
