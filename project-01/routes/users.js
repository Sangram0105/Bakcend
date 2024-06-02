const express =require('express');

const {getUser,getUserbyId,createUser,updateUserBy,deleteUserById}=require('../controllers/user');
const router=express.Router();



router.route('/').get(getUser).post(createUser);
router.route('/:id').get(getUserbyId).patch(updateUserBy).delete(deleteUserById);
    
module.exports=router;  
    //create a new user
   
        
    
    //update a user
    
       
    //     const id =Number(req.params.id);
    //  const body =req.body;
    //     const user =users.findIndex(users=>users.id ===id);
    //         if(user!==-1){
               
    //             users[user] = { ...users[user], ...body };
                
    //             fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    //                 if (err) {
    //                     return res.status(500).json({ status: "error", message: "Failed to update user." });
    //                 }
    //                 return res.json({ status: "success", id: id });
    //             });
    //         }
    //         else{
    //             res.send("user not found");
    //         }
    
   
  
    
    //delete a user
 
       
        // const id =Number(req.params.id);
        // const user =users.findIndex(users=>users.id===id);
        // if(user!==-1){
        //     users.splice(user,1);
        //     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err)=>{
        //         if(err){
        //             return res.status(500).json({status:"error",message:"Failed to delete user."});
        //         }
        //         return res.json({status:"success",id:id});
        //     });
        // }
        // else{
        //     res.send("user not found");
        // }
    
       

   