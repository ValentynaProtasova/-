let paragraphUser = parseInt(prompt('Введіть кількість абзаців','1'))

for (let paragIndex = 1; paragIndex <= paragraphUser; paragIndex++) {
  document.write(
    `<h1> Заголовок ${paragIndex} `) 

    for (let numbOfParag = 1; numbOfParag <= paragIndex; numbOfParag++) {
      document.write(`<p>Розділ ${paragIndex},параграф ${numbOfParag}</p>`)
    }
  document.write(`<hr>`)
}