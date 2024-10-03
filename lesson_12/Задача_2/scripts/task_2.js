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

function cocktailSort(arr) {
  let numberOfExchanges = 0
  let numberOfComparisons = 0
  let changed

  let leftIndex = 0
  let rightIndex = arr.length - 1
  do {
    changed = false
    for (let i = leftIndex + 1; i <= rightIndex; i++) {
      numberOfComparisons ++
      if (arr[i - 1] > arr[i]) {
        numberOfExchanges ++
        let temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
        changed = true
      }
    }
    rightIndex--
    if (changed === false) break
    changed = false
    for (let i = rightIndex; i > leftIndex; i--) {
      numberOfComparisons ++
      if (arr[i - 1] > arr[i]) {
        numberOfExchanges ++
        let temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
        changed = true
      }
    }
    leftIndex++
  } while(changed)
  return[arr, numberOfComparisons, numberOfExchanges]
}

let [arrSorty, exchanges, comparisons] = cocktailSort(arr);

document.write(`
  Відсортований масив: ${arrSorty}<br>
  Кількість обмінів: ${exchanges}<br>
  Кількість порівнянь: ${comparisons}
`)
