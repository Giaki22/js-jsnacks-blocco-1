let n = [1,2,3,4,5,6,7,8,9];
let b = [];

for (let i=0; i < n.length; i++){
    if (!(i % 2 == 0)){
        b.push(n[i]);
    }
}
console.log(b);