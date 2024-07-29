let age = parseFloat(prompt('Введіть, будь ласка, свій вік','0'))

if (age < 3) {
  document.write('Малюк')
} else if (age <= 5) {
  document.write('Дитина ходить до садочку')
} else if (age <= 17) {
  document.write('Школяр')
} else if (age <= 23) {
  document.write('Студент')
} else if (age <= 59) {
  document.write('Працівник')
} else {
  document.write('Пенсіонер')
}
