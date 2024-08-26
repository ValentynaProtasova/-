const userNumbLength = 7
let numbOfVisitors = []


function getArr() {
  for (let i = 0; i < userNumbLength; i++) {
    let userNumbOfVisitors = parseInt(prompt(`Введіть кількість відвідувачів в ${i + 1} день тижня`, '10'))

    numbOfVisitors.push(userNumbOfVisitors)
  }
}

function getNumbOfVisitorsLessThan (numbOfVisitors) {
  let visitorsLess = []

  for (let i = 0; i < numbOfVisitors.length; i++) {
    if (numbOfVisitors[i] < 20) {
      visitorsLess.push(i + 1)
    }
  }

  return visitorsLess
}

function getMinNumbOfVisitors(numbOfVisitors) {
  let visitorsMin = Math.min(...numbOfVisitors)

  for (let i = 0; i < numbOfVisitors.length; i++) {
    if (numbOfVisitors[i] === visitorsMin) {
      return i + 1
    }
  }
}

function getMaxNumbOfVisitors(numbOfVisitors) {
  let visitorsMax = Math.max(...numbOfVisitors)

  for (let i = 0; i < numbOfVisitors.length; i++) {
    if (numbOfVisitors[i] === visitorsMax) {
      return i + 1
    }
  }
}

function getNumbOfVisitorsOfWorkingDay(numbOfVisitors) {
  let sum = 0
  
  for (let i = 0; i < 5; i++) {
    sum += numbOfVisitors[i]
  }
  return sum
}

function getNumbOfVisitorsOfDayOff(numbOfVisitors) {
  let sum = 0
  
  for (let i = 5; i < numbOfVisitors.length; i++) {
    sum += numbOfVisitors[i]
  }
  return sum
}

getArr()
let visitorsLess = getNumbOfVisitorsLessThan (numbOfVisitors)
let visitorMinNumb = getMinNumbOfVisitors(numbOfVisitors)
let visitorMaxNumb = getMaxNumbOfVisitors(numbOfVisitors)
let visitorsSumOfWorkingDay = getNumbOfVisitorsOfWorkingDay(numbOfVisitors)
let visitorsOfDayOff = getNumbOfVisitorsOfDayOff(numbOfVisitors)

document.write(
  `${visitorsLess} дня тижня, коли відвідувачів було менше 20 <br>
  ${visitorMinNumb} дня тижня, коли відвідувачів була мінімальна кількість <br>
  ${visitorMaxNumb} дня тижня, коли відвідувачів була максимальна кількість <br>
  Кількість клієнтів у робочі дні ${visitorsSumOfWorkingDay} <br>
  Кількість клієнтів у вихідні дні ${visitorsOfDayOff}`
)
