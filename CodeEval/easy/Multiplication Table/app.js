var answer = '', res = 0;

for(var ix=1;ix<=12;ix++){    
    for(var j = 1;j<=12;j++){
        res = ix*j;
        
        if(res>9 && res<100){
            answer+='  '+res;
        }else if(res>99){
            answer+=' '+res;
        }else{
            answer+='   '+res;
        }
    }
    console.log(answer);
    answer='';
}