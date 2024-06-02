const express =require('express');

const {connectMongodb} =require('./connection');

const {logResReq,}=require('./middleware');
const userRouter=require('./routes/users');


const app = express();
const PORT =8000;
//connect to database
connectMongodb('mongodb://127.0.0.1:27017/Project01').then(()=>{console.log("connected to database")})


//middleware
app.use(express.urlencoded({extended:false}));
app.use(logResReq('log.txt'));


// routes
app.use('/api/users',userRouter);



app.listen(PORT, ()=>{
    console.log('server started at port 8000');
})