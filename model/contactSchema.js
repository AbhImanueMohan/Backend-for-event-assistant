//import mongoose
const mongoose =require('mongoose')

//define schema for products collection to store data
           const contactSchema = new mongoose.Schema({
        
         name:{
               type:String,
               required:true
            },
        email:{
               type:String,
               required:true
            },
            message:{
               type:String,
               required:true
            },
           
            })

// create a modele to store products details
const contacts = new mongoose.model('contacts',contactSchema)

//export model
module.exports = contacts