let numberName = parseInt(prompt('Введіть кількість імен', '5'))
let arrNumberName = []

for (let i = 0; i < numberName; i++) {
  let userName = prompt('Введіть ім\'я', '')
  arrNumberName.push(userName)
}

let searchLetter = arrNumberName.map((numb) => numb[0])
document.write(`${searchLetter}`)