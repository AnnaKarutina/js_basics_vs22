// kasutaja sisend
let inimesed = 100
let kohtiBussis = 50

// arvutus
let bussidTäidetud = Math.floor(inimesed / kohtiBussis)
let mahaJaanud = inimesed % kohtiBussis
// tulemuse väljastamine
console.log(inimesed + ' inimeste sõidutamiseks läheb vaja ' + bussidTäidetud + ' bussi')
if(mahaJaanud != 0){
    console.log('ja ' + mahaJaanud + ' inimest on jäänud maha')
}

// == != > < >= <= - võrdlusoperaatorid -> true / false

/*
if(tingimus){
    tegevused, mis sooritatakse, kui
    vastus tingimusele on true
} else {
    tegevused, mis sooritatakse, kui
    vastus tingimusele on false
}
 */