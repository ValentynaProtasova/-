class Auto {
  constructor(brandAuto, tankSize, numberAvailableLiters, numberSeats, numberPassengers) {
    this.brand = brandAuto
    this.tank = tankSize
    this.availableLiters = numberAvailableLiters
    this.seats = numberSeats
    this.passengers = numberPassengers
  }

  Refueling(userNumbLiters){
    let requiredNumbOfLiters = this.tank - this.availableLiters
    if (userNumbLiters > requiredNumbOfLiters) {
      throw new Error("Введені дані не коректні")
    } else {
      this.availableLiters += userNumbLiters
      return this.availableLiters
    }
  }

  outputNumberOfPassengers(){
    return this.passengers
  }

  addingPassengers(userNumbPassengers){
    let freePlaceInCar = this.seats - this.passengers
    if(userNumbPassengers > freePlaceInCar) {
      throw new Error("Введені дані не коректні")
    } else {
      this.passengers += userNumbPassengers
      return this.passengers;
    }
  }

  disembarkationOfPassengers(userNumbOfPassengersWillGetOut){
    if(userNumbOfPassengersWillGetOut > this.passengers) {
      throw new Error("Введені дані не коректні")
    } else {
      this.passengers -= userNumbOfPassengersWillGetOut
      return this.passengers
    }
  }
}

let auto = new Auto('Toyota', 50, 10, 5, 1)

let userNumbLiters = parseInt(prompt('Вкажіть кількість літрів'))
let userNumbPassengers = parseInt(prompt('Вкажіть кількість пасажирів'))
let userNumbOfPassengersWillGetOut = parseInt(prompt('Вкажіть кількість пасажирів, які вийдуть із машини'))

document.write(`<div>Бензина в бакі після заправки ${auto.Refueling(userNumbLiters)} літрів</div>`)
document.write(`<div>Кількість пасажирів в машині = ${auto.outputNumberOfPassengers()}</div>`)
document.write(`<div>Всього пасажирів в машині після посадки = ${auto.addingPassengers(userNumbPassengers)}</div>`)
document.write(`<div>В машині залишилось ${auto.disembarkationOfPassengers(userNumbOfPassengersWillGetOut)} пасажирів</div>`)
