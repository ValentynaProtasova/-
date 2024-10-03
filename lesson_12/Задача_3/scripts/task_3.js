let minNumb = parseInt(prompt('Введіть мінімальне число','1'))
let maxNumb = parseInt(prompt('Введіть максимальне число','100'))
let arr = []

function getArray(minNumb, maxNumb) {
  for (let i = 0; i < 30; i++) {
    let randomNumber = minNumb + Math.floor(Math.random() * (maxNumb - minNumb + 1))
    arr.push(randomNumber)
  }
}
getArray(minNumb, maxNumb)

function sortingByInclusions(arr) {
  let numberOfExchanges = 0
  let numberOfComparisons = 0

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1

    while(j >= 0 && arr[j] > current) {
      numberOfComparisons ++
      arr[j + 1] = arr[j]
      j = j - 1
      numberOfExchanges ++
     }
    arr[j + 1] = current
    numberOfComparisons++
  }
  return [arr, numberOfExchanges, numberOfComparisons]
}

let [arrSorty, exchanges, comparisons] = sortingByInclusions(arr);

document.write(`
  Відсортований масив: ${arrSorty}<br>
  Кількість обмінів: ${exchanges}<br>
  Кількість порівнянь: ${comparisons}
`)