const fs =require('fs');

function logResReq(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`${req.method} Request made to ${req.url} at ${new Date()}\n`,(err)=>{
            next();
        });
    }
}


module.exports={logResReq,};