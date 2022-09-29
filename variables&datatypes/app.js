// kasutaja sisend
let ringideArv = Number(prompt('Sisesta ringide arv'))
let porgandidKokku = 0
let ring = 1
while(ring <= ringideArv){
    // console.log(`${ring}. ring`)
    if(ring % 2 == 0){
        // console.log(`Saab ${ring} porgandit`)
        porgandidKokku = porgandidKokku + ring // porgandidKokku += ring
        // console.log(porgandidKokku)
    }
    ring++
}
console.log(`Porgandite koguarv on ${porgandidKokku}.`)
