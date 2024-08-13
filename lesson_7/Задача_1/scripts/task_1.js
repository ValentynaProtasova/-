let monthName
let monthNumb = parseInt(prompt('Введіть номер місяця', '1'))

function getSeason() {

  switch (monthNumb) {
    case 1:
      monthName = 'Це місяць січень'
      break

    case 2:
      monthName = 'Це місяць лютий'
      break
    
    case 3:
      monthName = 'Це місяць березень'
      break
      
    case 4:
      monthName = 'Це місяць квітень'
      break
      
    case 5:
      monthName = 'Це місяць травень'
      break
      
    case 6:
      monthName = 'Це місяць червень'
      break

    case 7:
      monthName = 'Це місяць липень'
      break

    case 8:
      monthName = 'Це місяць серпень'
      break

    case 9:
      monthName = 'Це місяць вересень'
      break

    case 10:
      monthName = 'Це місяць жовтень'
      break

    case 11:
      monthName = 'Це місяць листопад'
      break

    case 12:
      monthName = 'Це місяць грудень'
      break
                            
    default:
      'Неправильно введений номер місяця'
      break;
  }
  return monthName
}
getSeason()
document.write(getSeason(monthNumb))