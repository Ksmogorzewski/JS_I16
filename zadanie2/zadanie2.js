const {readFileSync, promises: fsPromises} = require('fs'); 

var najw_czn = -1; 

var najw_czn_ilosc = -1; 

var najw_rn_czn = -1; 

var najw_rn_czn_ilosc = -1; 

function rozklad_liczby(ilosc){ 

    czynniki = []; 

    var i = 2; 

    while (ilosc> 1 && i * i <=ilosc){ 

        while(ilosc % i ==0){ 

            czynniki.push(i); 

            ilosc = ilosc/i; 

        } 

        i = i+1; 

    } 

    if (ilosc > 1){ 

        czynniki.push(ilosc) 

    } 

    return czynniki; 

} 
 

function syncReadFile(filename){ 

  const contents = readFileSync(filename, 'utf-8'); 

  const arr = contents.split(/\r?\n/); 

  arr.forEach(element =>{ 

    element = parseInt(element); 

    rozklad = rozklad_liczby(element); 

    if (rozklad.length > najw_czn){ 

        najw_czn = rozklad.length; 

        najw_czn_ilosc = element; 

    } 

    rn_czn = new Set(rozklad); 

    if(rn_czn.size > najw_rn_czn){ 

        najw_rn_czn = rn_czn.size; 

        najw_rn_czn_ilosc = element 

    } 

  }) 

} 

liczby = syncReadFile('./liczby.txt'); 

console.log("Najwięcej czynników posiada liczba: " + najw_czn_ilosc + ". Jest ich aż: " + najw_czn); 

console.log("Najwięcej różnych czynników posiada liczba: " + najw_rn_czn_ilosc + ". Jest ich aż: " + najw_rn_czn); 