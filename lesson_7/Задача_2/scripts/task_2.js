let dayOfWeek
let dayNumb = parseInt(prompt('Введіть номер місяця', '1'))

function getSeason() {

  switch (dayNumb) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      dayOfWeek = 'Це робочий день'
      break;

    case 6:
    case 7:
      dayOfWeek = 'Це вихідний день'
      break;

    default:
      'Неправильно введений номер'
      break;
  }
  return dayOfWeek
}
getSeason()
document.write(getSeason(dayOfWeek))