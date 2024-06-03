const express =require('express');
const UrlRouter=require('./routes/urlRoute');
const app =express();
const PORT=8001;
const ConnectDB=require('./connection');
const URL = require('./models/url');
ConnectDB('mongodb://127.0.0.1:27017/URL_Shortner').then(()=>{
    console.log('Connected to DB');
}).catch((err)=>{
    console.log('Error in connecting to DB');
});


//middleware
app.use(express.json());

app.use('/url',UrlRouter);


 app.get( '/:ShortId',async (req,res)=>{
    const shortId = req.params.ShortId;
    const entry = await URL.findOneAndUpdate({
        ShortId : shortId
    },{
        $push:{
            visitHistory: Date.now()
            
        }
    });

    res.redirect(entry.OrignalUrl);
});


app.listen(PORT,()=>{
    console.log('Server is running on port 8001');
})