let arrNames = ['Natalya', 'Svitlana', 'Olga', 'Kateryna', 'Olena', 'Maryna', 'Iryna', 'Tetyana', 'Ganna', 'Oksana']
let lengthSearchName = 5

// -----сортуємо масив-----
function insertSort(arrNames) {
  for (let i = 1; i < arrNames.length; i++) {
    const current = arrNames[i];
    let j = i - 1
    while(j >= 0 && arrNames[j] > current) {
      arrNames[j + 1] = arrNames[j]
      j = j -  1
    }
    arrNames[j + 1] = current
  }
  return arrNames
}
let arrNameSort = insertSort(arrNames)

// -----шукаємо ім'я довжиною 5 символів-----
function includesName(arrNameSort, lengthSearchName) {
  let start = 0
  let end = arrNameSort.length - 1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (arrNameSort[middle].length === lengthSearchName) return middle
    if (arrNameSort[middle].length < lengthSearchName) start = middle + 1
    if (arrNameSort[middle].length > lengthSearchName) end = middle - 1
  }
  return -1
}

const index = includesName(arrNameSort, lengthSearchName)

if(index === -1) document.write(`В даному масиві не має шуканого елементу`)
else document.write(`В масиві є ім’я довжиною 5 символів і знаходиться під індексом ${index}<br>`)

document.write(`Відсорторований масив: ${arrNameSort}`)