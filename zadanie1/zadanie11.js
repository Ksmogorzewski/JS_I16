let tablica = ['pies1', 'pies2', 'pies3', 'pies4', 'pies5'];

if(tablica.length% 2 === 0){
    let index = (tablica.length/2)-1
console.log(tablica[index])
}else{
    let index = Math.floor(tablica.length/2)
    console.log(tablica[index])
}