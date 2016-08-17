var fs  = require("fs"),
    arr = [],
    ascii = 0,
    word = false,
    ans = '';

fs.readFileSync("input.txt").toString().split('\n').forEach(function (line) {
    if (line !== "") {
        word = false;
        ans = '';
        arr = line.split(""); 
        arr.forEach((char)=>{
            ascii = char.charCodeAt(); 
            if(ascii>64 && ascii<91 || ascii>96 && ascii<123){
                word = true;
                ans+= char.toLowerCase();
            }else if(word){
                word = false;
                ans+=' ';
            }
        });
        console.log(ans);
    }
})