let numbName = parseInt(prompt('Введіть кількість імен', '4'))
let userNameArr = []

function getArr() {
  for (let i = 0; i < numbName; i++) {
    let userName = prompt('Напишіть ім\'я')

    userNameArr.push(userName)
  }
}

function getNameIvan(userNameArr) {
  let nameIvan = 0

  for (let name = 0; name < userNameArr.length; name++) {
    if (userNameArr[name] === 'Ivan') {
      nameIvan ++
    }
  }
  return nameIvan
}

getArr()
let numberName = getNameIvan(userNameArr)

document.write(`Ім\'я Іван зустрічається ${numberName} разів `)