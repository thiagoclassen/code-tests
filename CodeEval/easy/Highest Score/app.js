var fs = require("fs"),
    row,
    rowLength,
    col,
    colLength;

fs.readFileSync("input.txt").toString().split('\n').forEach((line)=>{
    if(line === "") return 0;
    col = [];
    row = line.split("|"); 
    rowLength = row.length;

    row.forEach((l)=>{
        col.push(l.trim().split(" "));
    });
    
    colLength = col.length;
    var max = 0;
    var ans = [];
    for(var j=0;j<colLength;j++){
        for(var i=0,max=col[i][j];i<rowLength;i++){
            if(parseInt(col[i][j],10)>parseInt(max,10)){
              max = col[i][j];  
            } 
        }
        ans.push(max);
    }
    
    console.log("\n"+ans+"\n");

});