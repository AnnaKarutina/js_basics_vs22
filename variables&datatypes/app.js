// for

/*
for (let nimi = algvaartus; tingimus; suurendamine/vahendamine){
    tegevused, mis sooritatakse korduvalt
}

while(tingimus){
    tegevused, mis sooritatakse korduvalt
}
*/

for(let number = 1; number <= 10; number++){
    if(number == 5){
        // console.log(number)
        // break;
        continue;
    }
    console.log(number)
}
console.log('for tsükli töö lõpp')

let kord = 1
while(kord <= 10){
    console.log(kord)
    kord++
}
console.log('while tsükli lõpp')