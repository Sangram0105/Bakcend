
const User=require('../models/users');

async function getUser(req,res){
    const allDBUsers=await User.find({});
    return res.json(allDBUsers);
}

async function getUserbyId(req,res){
    const user =await User.findById(req.params.id);
    
        if(!user){
            return res.status(404).json({status:"error",message:"user not found"});
        }
    
         return res.json(user);
}
async function createUser(req,res){
    const body=req.body;
    
    if(
       !body ||
       !body.first_name ||
       !body.last_name ||
       !body.gender ||
       !body.email 
    ){
       return res.status(400).json({status:"error",message:"Please provide all the details"});
    }
   const result= await User.create(
     {
      first_name : body.first_name,
      last_name : body.last_name,
      email : body.email,
      gender:body.gender
     }
    );
        console.log(result);
    return res.status(201).json({ msg : "success", id : result._id });
  
}


async function updateUserBy(req,res){
    await User.findByIdAndUpdate(req.params.id,{
        last_name:req.body.last_name,
    });
       
    return res.json({status :"success",message:"user updated successfully"});
}
async function deleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"});
}

module.exports={getUser,getUserbyId,createUser,updateUserBy,deleteUserById};