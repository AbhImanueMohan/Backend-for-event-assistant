//import mongoose
const mongoose =require('mongoose')

//define schema for products collection to store data
           const homeSchema = new mongoose.Schema({
         id:{
             type:Number,
             required:true,
             unique:true
            },
         title:{
               type:String,
               required:true
            },
        
         description:{
                     type:String,
                    required:true,
             },
         rating:{
            type:String,
            required:true
         },
         price:{
            type:String,
            required:true
         }
            
            })

// create a modele to store events details
const events = new mongoose.model('events',homeSchema)

//export model
module.exports = events