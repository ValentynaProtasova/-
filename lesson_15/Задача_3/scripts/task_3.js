class MultChecker {
  constructor(numb) {
    this.number = numb,
    this.correctAnswer = 0
    this.wrongAnswer = 0
  }

  getGenerateExamples(min = 1, max = 9){
    this.randomSecond = min + Math.floor(Math.random() * (max - min + 1))
    return this.randomSecond
  }

  getCheckCorrectAnswer(userAnswer){
    let correctAnswer = this.number * this.randomSecond
    
    if(userAnswer === correctAnswer) {
      this.correctAnswer++
    } else {
      this.wrongAnswer++
    }
  }

  render(){
    document.write(`
      Правильних відповідей: ${this.correctAnswer}<br>
      Неправильних відповідей: ${this.wrongAnswer}
      `)
  }
}

let multChecker = new MultChecker(4)

for (let i = 0; i < 5; i++) {
  let userAnswer = parseInt(prompt(`Скільки буде ${multChecker.number} помножити на ${multChecker.getGenerateExamples()}`))
  multChecker.getCheckCorrectAnswer(userAnswer) 
}

multChecker.render()