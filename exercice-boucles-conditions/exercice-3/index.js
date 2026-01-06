let i=0;
let pair = "Pair";
let impair = "Impair";

while (i<=100){
    if (i<50 && i%2===0){
        console.log(i);
        console.log(pair);
        i=i+2;
    }
    else if (i<=50 && i%2!==0){
        console.log(i);
        console.log(impair);
        i=i+2
    }
    else if (i>=50 && i%2===0){
        console.log(i);
        console.log(pair);
        i=i+3;
    }
    else{
        console.log(i);
        console.log(impair);
        i=i+3
    }
}
