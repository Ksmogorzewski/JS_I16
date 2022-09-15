function losowo(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array)
}
let tablica = ['pies1', 'pies2', 'pies3', 'pies4', 'pies5'];
losowo(tablica)