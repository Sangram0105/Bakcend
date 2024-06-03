const mongoose =require('mongoose')

const UrlSechma = new  mongoose.Schema({

    ShortId :{
        type: String,
        required:true,
        unique:true,
    },
    OrignalUrl:{
        type: String,
        required:true,
        unique:true,
    },

    visitHistory: [{
        type:String,
    }],


},{timestamps:true});


const URL = mongoose.model('URL',UrlSechma);

module.exports=URL;