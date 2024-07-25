let a = parseFloat(prompt('Введіть число а', '0'))
let b = parseFloat(prompt('Введіть число b', '0'))
let c = parseFloat(prompt('Введіть число c', '0'))

let s1 = a + 12 + b
let s2 = Math.sqrt((a+b)/(2*a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / (-b))

document.write(`
  Число а = ${a}; <br>
  Число b = ${b}; <br>
  Число c = ${c}; <br>
  S1 = ${s1}; <br>
  S2 = ${s2}; <br>
  S3 = ${s3}; <br>
  S4 = ${s4}. <br>
`)

