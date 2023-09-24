const mongoose=require('mongoose')



const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
   
    email:{
        type:String,
        required:true,  
    },
    password:{
        type:String,
        required:true,
     
        
     
    }
})
const registers = new mongoose.model('registers',registerSchema)

//export the model

module.exports=registers