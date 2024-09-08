let userNumbOfElement = parseInt(prompt('Введіть кількість елементів', '10'))

let arr = new Array(userNumbOfElement)
arr.fill(7)
arr.fill(1, 0, 5)

document.write(`${arr}`)