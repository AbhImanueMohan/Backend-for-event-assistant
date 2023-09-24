

const packages= require('../model/packageSchema')




exports.getallPackages = async (req, res)=>{
    //logic
    try{
//get all events from collection in mongodb
const allPackages = await packages.find()
res.status(200).json(allPackages)//respone send back to the client
    }
    catch(err){
        res.status(401).json(err)
    }
}