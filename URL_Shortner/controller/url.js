
const shortId=require('shortid');

const URL =require('../models/url');

async function generateShortURL(req,res){
const shortid=shortId();

const body=req.body;
if(!body.url){
    return res.status(400).json({error:'URL is requried'});
}

await URL.create({
    ShortId :shortid,
    OrignalUrl:body.url,
    visitedHistory:[]
})


return res.json({id : shortid});
}

async function getAnalytics(req,res){

    const ShortId = req.params.ShortId;
   const result= await URL.findOne({ShortId});


    return res.json({TotalClicks: result.visitHistory.length,
                       Analytics : result.visitHistory,
    });
   
}




module.exports={generateShortURL,getAnalytics};