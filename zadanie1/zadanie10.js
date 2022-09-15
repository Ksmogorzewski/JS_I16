let tablica = ['pies1', 'pies2', 'pies3', 'pies4', 'pies5'];
let ostatni = tablica.length-1
tablica.splice(0,0,tablica[ostatni])
tablica.pop()
console.log(tablica)