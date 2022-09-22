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

// kasutaja sisend
let temp = Number(prompt('Sisesta õhutemperatuur'))
// kontroll ja väljastus
if(temp > 4.0){
    console.log('Ei ole jäätumise ohtu')
} else {
    console.log('On jäätumise oht')
}