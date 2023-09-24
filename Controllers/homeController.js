//logic to resolve


const events = require('../model/homeSchema')




exports.getallevents = async (req, res)=>{
    //logic
    try{
//get all events from collection in mongodb
const allHomes = await events.find()
res.status(200).json(allHomes)//respone send back to the client
    }
    catch(err){
        res.status(401).json(err)
    }
}

// view particular event details

exports.viewEvents = async (req, res)=>{
    //logic
    //get particuar product id
    const id = req.params.id//2
    //get details of particular product
    try{
        const event = await events.findOne({id})
        if(event){
            res.status(200).json(event)//product send back to the client 
        }
        else{
            res.status(401).json("Product not Found")//errorsending back to the client
        }
    }
    catch{
        res.status(401).json(err)//error sending back 
    }
}



