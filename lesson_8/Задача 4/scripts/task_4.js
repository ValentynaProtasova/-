let productsPrices = [1000, 20, 31, 300, 50, 80]
let productsTitles = ['cheese', 'juice', 'bread', 'butter', 'candy', 'tea']

let userAmountOfMoney = parseFloat(prompt('Введіть кількість грошей', '200'))

function getProductToBuy(productsPrices, productsTitles, userAmountOfMoney) {
  let productToBuy = []

   for (let i = 0; i < productsPrices.length; i++) {
    if (productsPrices[i] <= userAmountOfMoney)
    productToBuy.push(productsTitles[i])
   }

   return productToBuy
}

let  productToBuyUser = getProductToBuy(productsPrices, productsTitles, userAmountOfMoney)

document.write(`Ви можете купити "${productToBuyUser}" на ${userAmountOfMoney}грн.`)