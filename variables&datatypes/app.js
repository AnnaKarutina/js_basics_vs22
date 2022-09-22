// == != > < >= <= - võrdlusoperaatorid -> true / false

// loogilised operaatorid
// AND - &&
// OR - ||
// NOT - !

/*
if(tingimus){
    tegevused, mis sooritatakse, kui
    vastus tingimusele on true
} else {
    tegevused, mis sooritatakse, kui
    vastus tingimusele on false
}
 */

/*
if(tingimus1){
    kui see kehtib, siis edasi pole vaja kontrollida
    kui aga mitte, vaadatakse järgmine tinfimus
} else if(tingimus2){
    kui see kehtib, siis edasi pole vaja kontrollida
    kui aga mitte, vaadatakse järgmine tinfimus
} else {
    täidetakse siis, kui kõik eelmised ei sobinud
}
*/

// kasutaja sisend
let vanus = Number(prompt('Sisesta oma vanus'))
let sugu = prompt('Sisesta oma sugu')
let treening = Number(prompt('Sisesta treeningu tüüp'))
// kontroll ja väljastus
let pulsisagedus;

if(sugu == 'm' || sugu == 'M'){
    pulsisagedus = 220 - vanus
} else if(sugu == 'n' || sugu == 'N'){
    pulsisagedus = 206 - 0.88 * vanus
}
let minPulsisagedus;
let maxPulsisagedus;

if(treening == 1){
    minPulsisagedus = 0.5 * pulsisagedus
    maxPulsisagedus = 0.7 * pulsisagedus
} else if(treening == 2){
    minPulsisagedus = 0.7 * pulsisagedus
    maxPulsisagedus = 0.8 * pulsisagedus
} else if(treening == 3) {
    minPulsisagedus = 0.8 * pulsisagedus
    maxPulsisagedus = 0.87 * pulsisagedus
}

console.log(`Pulsisagedis peab olema vahemikus ${minPulsisagedus} kuni ${maxPulsisagedus}`)