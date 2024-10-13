nameBoysList = ['Olga', 'Maryna', 'Vita', 'Oksana', 'Kateryna', 'Svitlana']
nameGirlsList = ['Mykola', 'Stepan', 'Dmytro', 'Oleg', 'Viktor', 'Artem']

class DanceDirector {
  constructor(nameBoysList, nameGirlsList, interval) {
    this.arrBoysName = nameBoysList,
    this.arrGirlsName = nameGirlsList
  }
  
  getRandomChoiceOfBoys(){
    const randomBoysIndex = Math.floor(Math.random() * this.arrBoysName.length)
    return this.arrBoysName[randomBoysIndex]
  }

  getRandomChoiceOfGirls(){
    const randomGirlsIndex = Math.floor(Math.random() * this.arrGirlsName.length)
    return this.arrGirlsName[randomGirlsIndex]
  }

  getCouple(){
    let boy = this.getRandomChoiceOfBoys()
    let girl = this.getRandomChoiceOfGirls()
    console.log(`Пара для танцю: ${boy} та ${girl}`)
  }

  run(){
    setInterval(() => {
      this.getCouple()
    },5000)
  }
}

let arrDanceDirector = new DanceDirector(nameBoysList, nameGirlsList)
arrDanceDirector.getRandomChoiceOfBoys()
arrDanceDirector.run()

console.log(arrDanceDirector)
