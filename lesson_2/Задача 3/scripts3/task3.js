let yearOfBirth = parseFloat(prompt('Введіть рік ', '1900'))
let yearNow = 2024
let howOld = yearNow - yearOfBirth

document.write(`
<table border = '2'>
  <tr>
    <th>Поточний рік</th>
    <td>${yearNow}</td>
  </tr>

  <tr>
    <th>Рік народження</th>
    <td>${yearOfBirth}</td>
  </tr>

  <tr>
    <th>Кількість років</th>
  <td>${howOld}</td>
  </tr>
</table>
`)