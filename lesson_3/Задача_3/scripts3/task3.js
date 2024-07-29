let numb = parseFloat(prompt('Вкажіть будь-яке число від 1 до 5 ','1' ))

let min = 1
let max = 5
let randomNumb = min + Math.floor(Math.random()*(max-min+1))

if (numb === randomNumb) {
  document.write('Поздоровляю! Ви вгадали!!!')
} else {
  document.write('Нажаль, ви не вгадали')
}

document.write(`
<table border = '2'>
  <tr>
    <th>Число, яке ви загадали</th>
    <td>${numb}</td>
  </tr>

  <tr>
    <th>Число, яке згенерував компьютер</th>
    <td>${randomNumb}</td>
  </tr>
</table>
`)