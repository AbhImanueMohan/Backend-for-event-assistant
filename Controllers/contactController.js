
const contacts = require('../model/contactSchema')

exports.contactlist = async(req, res)=>{
 const{name,email,message} = req.body
 try{
const item = await contacts.find()

   
    const newContact = await contacts({name,email,message})
    //to store in db
    await newContact.save()
    res.status(200).json("Thank You For Your feedback")
 }
 catch(error){
    res.status(401).json(error)
 }
}