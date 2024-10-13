class ShootingGallery {
  constructor(field) {
    this.fieldOfHares = field
  }

  shotPosition(userIndex){
    if(this.fieldOfHares[userIndex] === 1){
      alert('Вітаю! Ви влучили!')
      this.fieldOfHares[userIndex] = 'X'
    } else {
      alert ('Не влучили!')
      this.fieldOfHares[userIndex] = '-'
    }
  }

  userShots(){
    let numberOfShots = 5
    while (numberOfShots > 0) {
      let userIndex = parseInt(prompt(`Введіть позицію пострілу від 0 до 10.\nЗалишилося спроб ${numberOfShots}`))
      this.shotPosition(userIndex)
      numberOfShots--
    }
    this.outputThePlayingField()
   }

  outputThePlayingField(){
    document.write(`<div>${this.fieldOfHares}</div>`)
  }
}

let field = [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0]
let shootingGallery = new ShootingGallery(field)



shootingGallery.outputThePlayingField()
shootingGallery.userShots()