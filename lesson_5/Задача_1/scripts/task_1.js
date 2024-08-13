let userNumb = parseInt(prompt('Введіть кількість випадкових чисел','5'))

document.write(`<ul>`)
  for (let liIndex = 0; liIndex < userNumb; liIndex++) {
  const randomNumb = 1 + Math.floor(Math.random() * userNumb)
  document.write(`<li>${randomNumb}</li>`)
}
document.write(`</ul>`)