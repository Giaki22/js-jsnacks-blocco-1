let aa = prompt("Inserisci una parola");
let bb = prompt("Inserisci una parola");
a = aa.length;
b = bb.length;

if (a>b){
    alert(aa,bb);
} 
else if (b>a){
    alert(bb,aa);
}
else{
    alert("Le parole hanno la stessa lunghezza");
}