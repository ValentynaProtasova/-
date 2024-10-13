class Baner {
  constructor(initBaners){
    this.baners = initBaners
  }

  getRandomIndex(){
    return Math.floor(Math.random() * this.baners.length)
  }

  showingBaners(){
    let showBaner = this.baners[this.getRandomIndex()]
    document.write(`
      <a href="${showBaner.link}">
        <img src="${showBaner.image}" width="600">
      </a>
      `)
  }
}

let baners = [
  {
    image: "./img/Київ-capital-of-ukraine.jpg",
    link: "https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2"
  },
  {
    image: "./img/Одеса.jpg",
    link: "https://uk.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B5%D1%81%D0%B0"
  },
  {
    image: "./img/Львів.jpg",
    link: "https://uk.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2"
  },
  {
    image: "./img/Харків.jpg",
    link: "https://uk.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2"
  }
]

let newArrBaner = new Baner(baners)
newArrBaner.showingBaners()