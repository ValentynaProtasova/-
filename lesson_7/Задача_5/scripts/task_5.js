let cmUser = parseInt(prompt('Введіть число в сантиметрах','0 см'))
let kgUser = parseInt(prompt('Введіть число в кілограмах','0 кг'))
let kmUser = parseInt(prompt('Введіть число в кілометрах','0 км'))

function getInch() {
  return (cmUser / 2.54)
}
let inch = getInch()

function getPound() {
  return (kgUser * 2.205)
}
let pound = getPound()


function getMile() {
  return (kmUser * 1.609)
}
let mile = getMile()

document.write(
  `Дюймів = ${inch.toFixed(2)} <br>
  Фунтів = ${pound.toFixed(2)} <br>
  Миль = ${mile.toFixed(2)} 
  `)