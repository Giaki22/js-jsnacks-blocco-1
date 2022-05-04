let n = [];
for (let i=0; i<6; i++){
    x = Number(prompt("Inserisci un numero"));
    if (!(x % 2 == 0)){
        n.push(x);
    }
}
alert(n);