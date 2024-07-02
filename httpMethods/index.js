
const http = require("http");
const fs = require("fs");
const url = require("url");


const server = http.createServer((req,res)=>{

console.log(req.url);

if(req.method=== "GET"){
    if(req.url==="/"){
        res.end("This is home page ");
    }else if(req.url==="/about"){
        res.end("I am Sangram Sankpal from Satara ");
    }
    else{
        res.end("404 page not found");
    }
}

})

server.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})