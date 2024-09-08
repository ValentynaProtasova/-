let userNumb = parseInt(prompt('Введіть кількість чисел в масиві', '10'))
let minNumb = parseInt(prompt('Введіть мінімальне число', '1'))
let maxNumb = parseInt(prompt('Введіть максимальне число', '50'))
let arrNumb = []
let product = []

for (let i = 0; i < userNumb; i++) {
  let num = minNumb + Math.floor(Math.random() * (maxNumb - minNumb + 1))
  arrNumb.push(num)
}

arrNumb.forEach((item) => {
    if(item > arrNumb[0]) product.push(item * 2)
  }
)

document.write(
  `Згенерований масив: ${arrNumb} <br>
  Масив чисел помножених на 2: ${product}`
)
