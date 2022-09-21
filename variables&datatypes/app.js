// kasutaja sisend
let nimi = prompt('Sisestage nimi')
let lubatudKiirus = Number(prompt('Sisestage lubatud kiirus'))
let tegelikKiirus = Number(prompt('Sisestage tegelik kiirus'))
// arvutus
let trahv = (tegelikKiirus - lubatudKiirus) * 3
let tegelikTrahv = Math.min(trahv, 190)
// tulemuse väljastamine
console.log(nimi + ', kiiruse ületamise eest on teie trahv ' + tegelikTrahv + ' eurot')