document.write(`<table border = "2">`)
  for (let rowIndex = 1; rowIndex <= 3; rowIndex++) {
    document.write(`<tr>`)
    for (let colIndex = 1; colIndex <= 7; colIndex++) {
      document.write(`<td>${colIndex}</td>`)
    }
    document.write(`</tr>`)
  }
  document.write(`</table>`)