let a = Math.floor(Math.random() * 100) + 1
let b = Math.floor(Math.random() * 100) + 1

console.log(a + " " + b);

let dzialanie = prompt("Jakie działanie: (+,-,*,/) ")
switch(dzialanie){
    case '+':
        console.log(a+b)
        break;
    case '-':
        console.log(a-b)
        break;
    case '*':
        console.log(a*b)
        break;
    case '/':
        console.log(a/b)
        break;
}