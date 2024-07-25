let costProduct = parseFloat(prompt('Введіть вартість товару', '0'))
let quantity = parseFloat(prompt('Введіть кількість товару', '0'))
let costTotal = costProduct * quantity
let VAT = costTotal * 5 / 100

document.write(`
<table border = '2'>
  <tr>
    <th>Вартість товару</th>
    <td>${costProduct}</td>
  </tr>

  <tr>
    <th>Кількість товару</th>
    <td>${quantity}</td>
  </tr>

  <tr>
    <th>Загальна вартість товару</th>
  <td>${costTotal}</td>
  </tr>

  <tr>
    <th>ПДВ</th>
    <td>${VAT}</td>
  </tr>
</table>
`)