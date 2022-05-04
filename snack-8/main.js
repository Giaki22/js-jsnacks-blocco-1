let x = [1,2,3,4,5];
let y = [6,7,8];
let d = 0;

if (x.length < y.length){
    d = y.length - x.length;
    for (let i = 0; i < d; i++){
        x.push("1");
    }
} else if (y.length < x.length){
    d = x.length - y.length;
    for (let i = 0; i < d; i++){
        y.push("1");
    }
};
console.log(x);
console.log(y);