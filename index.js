var request = require("request");
var cheerio = require("cheerio");

var url ="https://www.reddit.com/top/";

request(url, function(err,res,html){
     if(!err){
         var $ = cheerio.load(html);
       
        var alldata= $("#siteTable").children();
        
        var data =[];
        alldata.each(function(index){
        
        var result=$("#siteTable").children().eq(index).children().eq(4).find("a.title").text();
        if(result !== "")
            data.push(result);
        
        });
        
        console.log(data);
     }
});
