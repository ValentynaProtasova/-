let category = prompt('Введіть свою категорія водія','A')

if (category === 'A' || category === 'a') {
  document.write('Ви можете керувати мотоциклом')
} else if (category === 'B' || category === 'b') {
  document.write('Ви можете керувати легковим автомобілем')
} else if (category === 'C' || category === 'c') {
  document.write('Ви можете керувати вантажним автомобілем')
}