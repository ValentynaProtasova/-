let min = 20
let max = 50

for (let i = min; i < max; i++){
  if (i % 3 === 0 && i % 5 !== 0) {
    document.write(`${i}, `)
  }
}

