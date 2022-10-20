const {readFileSync, promises: fsPromises} = require('fs'); 

var sum = 0; 

var first = 0; 

function syncReadFile(filename){ 

  const contents = readFileSync(filename, 'utf-8'); 

 
 

  const arr = contents.split(/\r?\n/); 

  arr.forEach(number =>{ 

    if (number[0] === number[number.length-1]){ 

        sum+=1; 

        if(first === 0){ 

            first = parseInt(number); 

        } 

    } 

  }) 

} 

numbers = syncReadFile('./liczby.txt'); 

console.log("Jest ich "+ sum + ", a pierwsza z nich to: " + first);