let childName1 = prompt('Введіть ім\'я першої дитини', 'Ім\'я')
let childSweets1 = parseFloat(prompt('Введіть кількість у неї цукерок', '0'))

let childName2 = prompt('Введіть ім\'я другої дитини', 'Ім\'я')
let childSweets2 = parseFloat(prompt('Введіть кількість у неї цукерок', '0'))

if (childSweets1 > childSweets2) {
  document.write(`${childName1}`)
} else if (childSweets1 < childSweets2) { 
    document.write(`${childName2}`)
} else {
  document.write('Кількість цукерок однакова у обох дітей')
}