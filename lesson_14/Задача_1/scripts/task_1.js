let arrSite = [
  {
    nameCompany: 'Forrest Gump',
    ownerCompany: 'Paramount Pictures',
    sponsors: {
      lastName: 'Hanks',
      name: 'Tom',
      investmentAmount: 1000000,
    },
    graduationYear: 2015,
    costSite: 50000,
  },
  {
    nameCompany: 'Oppenheimer',
    ownerCompany: 'Universal Pictures',
    sponsors: {
      lastName: 'Murphy',
      name: 'Cillian',
      investmentAmount: 20000,
    },
    graduationYear: 2023,
    costSite: 30000,
  },
  {
    nameCompany: 'Mask',
    ownerCompany: 'Warner Bros',
    sponsors: {
      lastName: 'Carrey',
      name: 'Jim',
      investmentAmount: 30000,
    },
    graduationYear: 2020,
    costSite: 40000,
  },
  {
    nameCompany: 'The Green Mile',
    ownerCompany: 'Warner Bros',
    sponsors: {
      lastName: 'King',
      name: 'Stephen',
      investmentAmount: 400000,
    },
    graduationYear: 2009,
    costSite: 60000,
  },
  {
    nameCompany: 'Godfather',
    ownerCompany: 'Paramount Pictures',
    sponsors: {
      lastName: 'Coppola',
      name: 'Francis',
      investmentAmount: 50000,
    },
    graduationYear: 2001,
    costSite: 70000,
  },
  {
    nameCompany: 'Titanic',
    ownerCompany: 'Paramount Pictures',
    sponsors: {
      lastName: 'Cameron',
      name: 'James',
      investmentAmount: 25000,
    },
    graduationYear: 2005,
    costSite: 35000,
  },
  {
    nameCompany: 'Die Hard',
    ownerCompany: 'Pictures',
    sponsors: {
      lastName: 'Willis',
      name: 'Bruce',
      investmentAmount: 150000,
    },
    graduationYear: 2000,
    costSite: 25000,
  }
]
// 1.загальну вартість усіх сайтів
let totalCostOfSites = arrSite.reduce(
  (prevTotalCost, cost) => prevTotalCost + cost.costSite, 0
)

// 2.кількість сайтів, що було зроблено між 2000 та 2009 рр.
let amountSitesMadeBetween = arrSite.reduce(
  (amount, year) => 
  (year.graduationYear >= 2000 && year.graduationYear <= 2009) ? amount + 1 : amount, 0
)

// 3.кількість сайтів, де сума спонсорських вкладень була більшою за 100000
let sponsoredAttachmentsMore100000 = arrSite.reduce(
  (amount, attachment) => attachment.sponsors.investmentAmount > 100000 ? amount + 1 : amount, 0
)
// 4.створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
let listOfSponsor = arrSite.map(
  (sponsor) =>  sponsor.sponsors,
)
console.log(listOfSponsor)

// 5.знайти рік, коли прибуток був найбільшим
let mostProfitableYear = arrSite.reduce(
  (prevMax, profit, graduationYear) =>
    profit.costSite > prevMax ? profit.costSite : prevMax).graduationYear
console.log(mostProfitableYear)

// 6.упорядкувати список за спаданням прибутку
let listByDecreasing = arrSite.sort(
  (profit1, profit2) => profit2.costSite - profit1.costSite
)
console.log(listByDecreasing)
// 7.Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
let siteCostUpTo10 = arrSite.filter(
  (cost) => cost.costSite < 10000
)
console.log(siteCostUpTo10)

let siteCostMore10 = arrSite.filter(
  (cost) => cost.costSite > 10000
)
console.log(siteCostMore10)

document.write(
  `<ul>
    <ol>
      <li>Загальна вартість усіх сайтів = ${totalCostOfSites}<br></li>
      <li>Кількість сайтів, що було зроблено між 2000 та 2009 рр. = ${amountSitesMadeBetween} <br></li>
      <li>Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 = ${sponsoredAttachmentsMore100000} <br></li>
      <li>Список усіх спонсорів (у консолі)<br></li>
      <li>Рік, коли прибуток був найбільшим: ${mostProfitableYear}<br></li>
      <li>Список за спаданням прибутку (у консолі)<br></li>
      <li>Списки з копіями об’єктів, що містять сайти з вартість до 10000 <br> і більше 10000 (у консолі)<br></li>
    </ol>
  </ul>`
)