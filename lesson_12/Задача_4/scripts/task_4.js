let arr = [3, 5, 1, 4, 2]
document.write(`Початковий масив ${arr} <br>`)

// ------1.Сортування бульбашкою----- 
document.write(`1. Сортування бульбашкою: <br>`)
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
        
        document.write(`${arr}<br>`)
      }
    }
  } while(changed)

  return [arr, numberOfExchanges, numberOfComparisons]
}

let [arrSorty1, exchanges1, comparisons1] = bubbleSort(arr.slice());

document.write(`
  Відсортований масив: ${arrSorty1}<br>
  Кількість обмінів: ${exchanges1}<br>
  Кількість порівнянь: ${comparisons1} <br>
`)

// -----2.Сортування змішуванням-----
document.write(`2. Сортування змішуванням: <br>`)
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

        document.write(`${arr}<br>`)
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

        document.write(`${arr}<br>`)
      }
    }
    leftIndex++
  } while(changed)
  return[arr, numberOfComparisons, numberOfExchanges]
}

let [arrSorty2, exchanges2, comparisons2] = cocktailSort(arr.slice());

document.write(`
  Відсортований масив: ${arrSorty2}<br>
  Кількість обмінів: ${exchanges2}<br>
  Кількість порівнянь: ${comparisons2} <br>
`)

// -----3.Сортування включенням----
document.write(`3. Сортування включенням: <br>`)
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

    document.write(`${arr}<br>`)
  }
  return [arr, numberOfExchanges, numberOfComparisons]
}

let [arrSorty, exchanges, comparisons] = sortingByInclusions(arr.slice());

document.write(`
  Відсортований масив: ${arrSorty}<br>
  Кількість обмінів: ${exchanges}<br>
  Кількість порівнянь: ${comparisons}
`)