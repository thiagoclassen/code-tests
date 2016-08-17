var sum = 2;
var ix=3, aux=0;

 while(aux<999){   
    var flag = true;
    for(var j = ix-1;j>1;j--){
        if(ix%j==0){
            flag = false;
            break;
        }
    }
    if(flag){
        sum+=(ix);
        aux++;        
    }
    ix+=2;
}
console.log(sum);