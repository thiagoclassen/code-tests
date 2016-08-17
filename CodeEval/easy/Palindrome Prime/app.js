
function isPrime(num){
    
    if(num%2===0) return false;

    for(var i = 3;i<Math.sqrt(num);i+=2){
        if(num%i===0) return false;
    }
    
    return true;
}

for(var i=999;i>0;i-=101){
    for(var j = i;j>i-101;j-=10){
        if(isPrime(j)){
            console.log(j);
            return 1;
        } 
    }
}