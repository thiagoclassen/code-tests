var fs  = require("fs");
var res, ans;
fs.readFileSync("input.txt").toString().split('\n').forEach(function (line) {
    if (line !== "") {
        res = line.split(' ');
        ans = '';
        for(var ix = res.length-1;ix>=0;ix--){
            ans += res[ix] + ' ';
        }             
        console.log(ans.slice(0, ans.length-1));
    }
})

/*line.split(' ').reverse().join(' ');*/