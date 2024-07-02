const http =require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{  //  arrow function is reponsible for 
                                             //handling the request and response
       // console.log(req.headers);
       //  res.end("Hello from the server");
         const log ='${Date.now()} : data recive\n';

         fs.appendFile("serverinfo.txt",log ,(err,data)=>{
            switch(req.url){
                case "/":
                    res.end("This is the home page ");
                    break;
                case "/about":
                    res.end("I am Sangram Sankpal from Satara ");
                    break;
                 case "/contact":
                    res.end("+91 973762458"); 
                    break;
                    
                 default:
                    res.end("404 page not found");   
            }
         });
});


server.listen(8000,() =>{
    console.log("Server is listening on port 8000");
});