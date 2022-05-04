let aa = prompt("Inserisci una parola");
let bb = prompt("Inserisci una parola");
a = aa.length;
b = bb.length;

if (a>b){
    alert(bb,aa);
} 
else if (b>a){
    alert(aa,bb);
}
else{
    alert("Le parole hanno la stessa lunghezza");
}