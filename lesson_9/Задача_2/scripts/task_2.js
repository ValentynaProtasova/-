let userNumbOfElement = parseInt(prompt('Введіть кількість елементів', '5'))
let numbOne =Math.floor(userNumbOfElement / 2)

let arr = new Array(userNumbOfElement)
arr.fill(7)
arr.fill(1, 0, numbOne)

document.write(`${arr}`)