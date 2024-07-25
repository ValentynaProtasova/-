      let firstNumber = parseFloat(prompt('Введіть перше число ', '0'))
      let secondNumber = parseFloat(prompt('Введіть друге число ', '0'))

      let sum = firstNumber + secondNumber

      let mult = firstNumber * secondNumber


      let divis = firstNumber / secondNumber

      document.write(`
      <table border = '2'>
        <tr>
          <th>Перше число</th>
          <td>${firstNumber}</td>
        </tr>

        <tr>
          <th>Друге число</th>
          <td>${secondNumber}</td>
        </tr>

        <tr>
          <th>Сума</th>
        <td>${sum}</td>
        </tr>
    
        <tr>
          <th>Добуток</th>
          <td>${mult}</td>
        </tr>

        <tr>
          <th>Частка</th>
          <td>${divis}</td>
        </tr>
    </table>
      `)