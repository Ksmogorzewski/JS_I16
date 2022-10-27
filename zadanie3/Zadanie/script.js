var headingEl = document.getElementById("heading");    
headingEl.innerHTML = "All about cats"; 

var nameEls = document.getElementsByTagName("span");     console.log(nameEls)	; 
    for (var i = 0; i < nameEls.length; i++) { 
                 nameEls[i].innerHTML = "cat"; 
    } 

let btn = document.getElementById("dodaj");
let opinia = document.getElementById("opinia");
let tab = [];

btn.addEventListener("click", function(){
    $("body").append("<p class=\"op\">"+opinia.value+"</p>");
});

for(let i=0; i<5; i++){
    let a = prompt("Podaj swoje zainteresowania: ")
    tab.push(a);
}

headingEl.style.color="green";
$("h1").delay(5000).fadeOut(3000)
setTimeout(changeColor,9000);
function changeColor(){
    headingEl.style.color="#18b1ed";
    $("h1").delay(5000).fadeIn(1)
}
$("#hobbys").append("<ol><li>"+tab[0]+"</li><li>"+tab[1]+"</li><li>"+tab[2]+"</li><li>"+tab[3]+"</li><li>"+tab[4]+"</li></ol>");
