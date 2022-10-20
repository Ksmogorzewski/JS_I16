const fs = require('fs'); 

function lineCount(text){ 

    var nLines = 0; 

    for( var i = 0, n = text.length;  i < n;  ++i ) { 

        if( text[i] === '\n' ) { 

            ++nLines; 

        } 

    } 

    return nLines; 

} 

var text = new String(fs.readFileSync('liczby.txt')); 

var lines = text.split(/\r\n|\n/); 

var nlines = lineCount(text); 

var a, b, c, d, e; 

var trojki = 0, piatki = 0; 

let writer = fs.createWriteStream('trojki.txt'); 

let writer2 = fs.createWriteStream('piatki.txt'); 

 

for(let i = 0; i < nlines; i++){ 

    a = lines[i]; 

    for(let j = 0; j < nlines; j++){ 

        if(lines[j]%a == 0 && a != lines[j]){ 

            b = lines[j]; 

            for(let g = 0; g < nlines; g++){ 

                if(lines[g]%b == 0 && b != lines[g]){ 

                    c = lines[g]; 

                    for(let h = 0; h < nlines; h++){ 

                        if(lines[h]%c == 0 && c != lines[h]){ 

                            d = lines[h]; 

                            for(let k = 0; k < nlines; k++){ 

                                if(lines[k]%d == 0 && d != lines[k]){ 

                                    e = lines[k]; 

                                    writer2.write(a + " " + b + " " + c + " " + d + " " + e+"\n"); 

                                    piatki += 1; 

                                } 

                            } 

                        } 

                    } 

                } 

            } 

        } 

    } 

} 

 
 

for(let i = 0; i < nlines; i++){ 

    a = lines[i]; 

    for(let j = 0; j < nlines; j++){ 

        if(lines[j]%a == 0 && a != lines[j]){ 

            b = lines[j]; 

            for(let g = 0; g < nlines; g++){ 

                if(lines[g]%b == 0 && b != lines[g]){ 

                    c = lines[g]; 

                    writer.write(a + " " + b + " " + c +"\n"); 

                    trojki += 1; 

                } 

            } 

        } 

    } 

} 

console.log("Ilosc trojek: " + trojki); 

console.log("Ilosc piatek: " + piatki); 