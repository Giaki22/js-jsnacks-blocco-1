let nomi = ["Gino","Homer","Bart","Marco", "Gerardo"];
let cognomi = ["Caulo","Simpson","Kent","Giannetta"];
let min = 0;
let nomiCognomi = [];

if (nomi.length < cognomi.length){
    min = Number(nomi.length);
} else {
    min = Number(cognomi.length);
};
for (let i = 0; i < min; i++) {
    nomiCognomi[i] = (nomi[Math.floor(Math.random() * min) + 1] + cognomi[Math.floor(Math.random() * min) + 1]); 
};
for (let i = 0; i < nomiCognomi.length; i++){
    console.log(nomiCognomi[i]);
};