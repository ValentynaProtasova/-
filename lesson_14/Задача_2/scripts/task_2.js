let userMonth = parseInt(prompt('Введіть кількість місяців','12'))

let date = {
  day: 1,
  month: 1,
  year: 2024 
}

function getYear({month,year}, userMonth) {
  let totalMonth = month - 1 + userMonth
  let additionalYears = Math.floor(totalMonth / 12)
  let resultYear = year + additionalYears

  return resultYear
}

document.write(getYear(date,userMonth))