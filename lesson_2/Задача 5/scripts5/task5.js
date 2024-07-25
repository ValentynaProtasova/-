let lengthCM = parseFloat(prompt('Введіть довжину', '0'))
let lengthM = lengthCM / 100
let lengthK = lengthCM / 100000

document.write(`
<table border = '2'>
  <tr>
    <th>Довжина в сантиметрах</th>
    <td>${lengthCM}см</td>
  </tr>

  <tr>
    <th>Довжина в метрах</th>
    <td>${lengthM}м</td>
  </tr>

  <tr>
    <th>Довжина в кілометрах</th>
  <td>${lengthK}км</td>
  </tr>
</table>
`)
