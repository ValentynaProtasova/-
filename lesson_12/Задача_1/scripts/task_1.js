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

function bubbleSort(arr) {
  let numberOfExchanges = 0
  let numberOfComparisons = 0
  let changed

  do{
    changed = false

    for (let i = 1; i < arr.length; i++) {
      numberOfComparisons ++
      if(arr[i - 1] > arr[i]){
        numberOfExchanges ++
        let ch = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = ch
        changed = true
      }
    }
  } while(changed)

  return [arr, numberOfExchanges, numberOfComparisons]
}

let [arrSorty, exchanges, comparisons] = bubbleSort(arr);

document.write(`
  Відсортований масив: ${arrSorty}<br>
  Кількість обмінів: ${exchanges}<br>
  Кількість порівнянь: ${comparisons}
`)
