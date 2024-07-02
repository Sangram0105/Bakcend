function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//default export
module.exports ={
   addition : add,
    substract :sub,
}

//Named export

exports.addition = (a,b)=>a+b;
exports.substract = (a,b)=>a-b;  

//which is better?
//default export is better because it is more readable and easy to understand.