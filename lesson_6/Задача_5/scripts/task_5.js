let min = 35
let max = 87

for (let i = min; i <= max; i++){
  if (i % 7 === 1 || i % 7 === 2 || i % 7 === 5) {
    document.write(`${i}, `)
  }
}