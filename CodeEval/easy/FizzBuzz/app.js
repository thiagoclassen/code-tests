var fs  = require("fs");
var x, y;

fs.readFileSync("input.txt").toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var res = line.split(' ');
        var answer = '';
        x = res[0];
        y = res[1];

        for(var ix = 1;ix<=res[2];ix++){
            var num = true;
            
            if(ix%(x) == 0){
                answer+=('F');
                num = false;
            }
            if(ix%(y) == 0){
                answer+=('B');
                num = false;
            }            
            if(num){
                answer+=(ix.toString());
            }
            answer+=' ';
        }
        
        console.log(answer.slice(0,answer.length-1));        
    }
});