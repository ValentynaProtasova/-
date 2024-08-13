let rowUser = parseInt(prompt('Введіть кількість рядків','5'))
let columnUser = parseInt(prompt('Введіть кількість стовпців','5'))
let messageUser = prompt('Введіть повідомлення','Hello world!')

document.write (`<table border = "2">`)
for (let row = 1; row <= rowUser; row++) {
  document.write(`<tr>`)
  for (let column = 1; column <= columnUser; column++) {
    document.write(`<td>${messageUser}</td>`)
  }
  document.write(`</tr>`)
}
document.write (`</table>`)
