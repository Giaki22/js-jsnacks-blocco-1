let aa = prompt("Inserisci una parola");
let bb = prompt("Inserisci una parola");
a = aa.length;
b = bb.length;

if (a>b){
    alert(aa);
} 
else if (b>a){
    alert(bb);
}
else{
    alert("Le parole hanno la stessa lunghezza");
}