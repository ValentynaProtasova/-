let season
let monthNumb = parseInt(prompt('Введіть номер місяця', '1'))

function getSeason() {

  switch (monthNumb) {
    case 12:
    case 1:
    case 2:
      season = 'Пора року - зима'
      break;
    
    case 3:
    case 4:
    case 5:
      season = 'Пора року - весна'
      break;

    case 6:
    case 7:
    case 8:
      season = 'Пора року - літо'
      break;

    case 9:
    case 10:
    case 11:
      season = 'Пора року - осінь'
        break;
    default:
      'Неправильно введений номер місяця'
      break;
  }
  return season
}
getSeason()
document.write(getSeason(monthNumb))