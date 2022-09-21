// kasutaja sisend
let inimesed = 100
let kohtiBussis = 50

// arvutus
let bussidTäidetud = Math.floor(inimesed / kohtiBussis)
let mahaJaanud = inimesed % kohtiBussis
// tulemuse väljastamine
console.log(inimesed + ' inimeste sõidutamiseks läheb vaja ' + bussidTäidetud + ' bussi ja ' + mahaJaanud + ' inimest on jäänud maha')