//import mongoose
const mongoose =require('mongoose')

//define schema for products collection to store data
           const bookingSchema = new mongoose.Schema({
        
         uname:{
               type:String,
               required:true
            },
        phone:{
               type:Number,
               required:true
            },
            address:{
               type:String,
               required:true
            },
            event:{
               type:String,
               required:true
            },
            date:{
                type:String,
                required:true
            }
            })

// create a modele to store products details
const books = new mongoose.model('books',bookingSchema)

//export model
module.exports = books