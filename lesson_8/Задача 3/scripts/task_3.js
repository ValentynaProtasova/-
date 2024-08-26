let numbOfRatings = parseInt(prompt('Введіть кількість оцінок', '5'))
let arrNumbOfRatings = []

function getArr() {
  for (let i = 0; i < numbOfRatings; i++) {
    let userAssessments = parseInt(prompt('Введіть оцінки','5'))

    arrNumbOfRatings.push(userAssessments)
  }
}

function getBadGrades(arrNumbOfRatings) {
  let badGrades = 0

  for (let i = 0; i < arrNumbOfRatings.length; i++) {
    if (arrNumbOfRatings[i] === 2) badGrades ++
  }
  return badGrades
}

function getGoodGrades(arrNumbOfRatings) {
  let goodGrades = 0

  for (let i = 0; i < arrNumbOfRatings.length; i++) {
    if (arrNumbOfRatings[i] === 4 || arrNumbOfRatings[i] === 5) 
    goodGrades ++
  }
  return goodGrades
}

function getGradesBelowAverage(arrNumbOfRatings) {
  let gradesBelowAverage = 0

  for (let i = 0; i < arrNumbOfRatings.length; i++) {
    if (arrNumbOfRatings[i] === 3) 
    gradesBelowAverage ++
  }
  return gradesBelowAverage
}

getArr()
let bad = getBadGrades(arrNumbOfRatings)
let belowAvarage = getGradesBelowAverage(arrNumbOfRatings)
let good = getGoodGrades(arrNumbOfRatings)

document.write(
  `Кількість оцінок "2" = ${bad} <br>
  Кількість оцінок "3" = ${belowAvarage} <br>
  Кількість оцінок "4" та "5" = ${good}`
  )