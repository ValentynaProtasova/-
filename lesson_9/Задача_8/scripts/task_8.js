let quantityCarNumb = parseInt(prompt('Введіть кількість номерів машин', '5'))
let arrCarNumber = []

for (let i = 0; i < quantityCarNumb; i++) {
  let carNumber = prompt('Введіть номерні знаки', '')
  arrCarNumber.push(carNumber)
}

let avtoList = arrCarNumber.filter((numb) => (numb[0] === 'A'))
document.write(`Масив номерів, які починаються на "А": ${avtoList}`)