// kasutaja sisend
let ainepunktid = Number(prompt('Ainepunktide arv'))
let nadalad = Number(prompt('Sisestage nadalad'))

// arvutus
let tunnid = ainepunktid * 26
let nadalasToimetan = Math.ceil(tunnid / nadalad)
// tulemuse väljastamine
console.log(nadalasToimetan)