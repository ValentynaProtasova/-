let numbOfPayment = parseInt(prompt('Введіть кількість платежів', '12'))
let arrUserPayment = []

function getArr() {
  for (let i = 0; i < numbOfPayment; i++) {
    let userPayment = parseFloat(prompt('Введіть платіж', '100'))
    arrUserPayment.push(userPayment)
  }
}

function getSumAllYear(arrUserPayment) {
  let sum = 0
  for (let i = 0; i < arrUserPayment.length; i++) {
    sum += arrUserPayment[i]
  }
  return sum
}

function getSumTheFirstHalf(arrUserPayment) {
  let sum = 0

  for (let i = 0; i < 6; i++) {
    sum += arrUserPayment[i]
  }
  return sum
}

function getSumTheSecondHalf(arrUserPayment) {
  let sum = 0

  for (let i = 6; i < arrUserPayment.length; i++) {
    sum += arrUserPayment[i]
  }
  return sum
}

function getSumForTheSummer(arrUserPayment) {
  let sum = 0

  for (let i = 5; i < 8; i++) {
    sum += arrUserPayment[i]
  }
  return sum
}

function getSumForTheSecondQuarter(arrUserPayment) {
  let sum = 0

  for (let i = 3; i < 6; i++) {
    sum += arrUserPayment[i]
  }
  return sum
}

function getSumForEvenMonths(arrUserPayment) {
  let sum = 0

  for (let i = 1; i < arrUserPayment.length; i+=2) {
    sum += arrUserPayment[i]
  }
  return sum
}

function getSumForTheMonthsBeginning(arrUserPayment) {
  let sum = 0

  for (let i = 2; i < arrUserPayment.length; i+=3) {
    sum += arrUserPayment[i]
  }
  return sum
}

getArr()
let sumAllYear = getSumAllYear(arrUserPayment)
let sumTheFirstHalf= getSumTheFirstHalf(arrUserPayment)
let sumTheSecondHalf= getSumTheSecondHalf(arrUserPayment)
let sumForTheSummer= getSumForTheSummer(arrUserPayment)
let sumForTheSecondQuarter= getSumForTheSecondQuarter(arrUserPayment)
let sumForEvenMonths= getSumForEvenMonths(arrUserPayment)
let sumForTheMonthsBeginning = getSumForTheMonthsBeginning(arrUserPayment)

document.write(
  `<table border = '2'>
    <tr>
      <th>Сума за весь рік</th>
      <td>${sumAllYear}</td>
    </tr>
    
    <tr>
      <th>Сума за першу половину року</th>
      <td>${sumTheFirstHalf}</td>
    </tr>

    <tr>
      <th>Сума за другу половину року</th>
      <td>${sumTheSecondHalf}</td>
    </tr>

    <tr>
      <th>Сума за період літа</th>
      <td>${sumForTheSummer}</td>
    </tr>

    <tr>
      <th>Сума за ІІ квартал</th>
      <td>${sumForTheSecondQuarter}</td>
    </tr>

    <tr>
      <th>Сума за парні місяці</th>
      <td>${sumForEvenMonths}</td>
    </tr>

    <tr>
      <th>Сума за місяці, які є початковими у сезоні</th>
      <td>${sumForTheMonthsBeginning}</td>
    </tr>
</table>`
)