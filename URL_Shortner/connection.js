const mongoose =require('mongoose')

async function ConnectDB(url){

   mongoose.set("strictQuery",true);
           return  mongoose.connect(url);
}

module.exports=ConnectDB;