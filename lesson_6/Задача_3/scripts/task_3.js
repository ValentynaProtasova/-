let userDepositAmount = parseFloat(prompt('Введіть суму вкладу, грн', '1000'))
const year = 20
const annualProfit = 0.20
const tax = 0.05
let total = userDepositAmount

let profit = 0

for (let i = 1; i <= year; i++) {
  total += (total * annualProfit) - (total * tax) 
}

document.write(`
<table border = '2'>
  <tr>
    <th>Сума вкладу</th>
    <td>${userDepositAmount.toFixed(2)}</td>
  </tr>

  <tr>
    <th>Сума, яку отримає вкладник через 20 років</th>
    <td>${(total).toFixed(2)}</td>
  </tr>
</table>
`)
