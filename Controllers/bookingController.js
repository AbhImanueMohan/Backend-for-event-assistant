
const books = require('../model/bookingSchema')

exports.booklist = async(req, res)=>{
 const{uname,phone,address,event,date} = req.body
 try{
const item = await books.findOne({uname})
if(item){
    res.status(401).json("already booked")
}
else{
    //product is added to the wishlist
    const newBook = await books({uname,phone,address,event,date})
    //to store in db
    await newBook.save()
    res.status(200).json("Booking is confirmed")
}
 }
 catch(error){
    res.status(401).json(error)
 }
}