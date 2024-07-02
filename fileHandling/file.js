const fs=require('fs');

// create a file

//synchronous way
fs.writeFileSync('./new.txt',"Hello this is first file created by nodejs");

//Asynchronous way
fs.writeFile('./abc.txt',"The content of this file cannot chnage manually",(err)=>{
    console.log("File created successfully");
});


//reading file 

//Asynchronous way
fs.readFile('./content.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }   
    else{
        console.log(data);
    }
});
//synchronous way
//we can write the file content in the console
const data=fs.readFileSync('./content.txt','utf8');
console.log(data);

//Append data to file

fs.appendFile('./content.txt',"\nnot me :+91 1010698657",(err)=>{ //in data we always have to send the data in string format
    if(err){
        console.log(err);
        return;
    }
    console.log("Data appended successfully");
});


//copy file
fs.cpSync('./content.txt','./content2.txt');
//delete file
// fs.unlink('./content2.txt',(err)=>{
//     console.log("File deleted successfully",err);
// });

console.log(fs.statSync('./content.txt',(err,stats)=>{
    
}))
