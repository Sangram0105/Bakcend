const express =require('express');

const router=express.Router();
const {generateShortURL,getAnalytics}=require('../controller/url');
router.post('/',generateShortURL);
router.get('/analytics/:ShortId',getAnalytics);


module.exports=router;