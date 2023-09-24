
const registers = require("../model/registerSchema");


//logic to register new employees
exports.userRegister =async (req,res)=>{
    
    const{name,email,password}=req.body
  

 try {  const preRegister=await registers.findOne({email})
        if(preRegister){
            res.status(403).json('User already exist')
        }
        else{
            const newRegister=new registers({
                name,email,password,
            })
            await newRegister.save()
            res.status(200).json('Register Sucessfully')
        }

}
 catch (error){
     res.status(401).json(error)
 }
}


//to login 
exports.login = async (req,res)=>{

    const{email,password}=req.body
  
 try {  const preRegister=await registers.findOne({email,password})
        if(preRegister){
            
            res.status(200).json('login Sucessful')
        }
        else{
           
            res.status(401).json('Please register or invalid email or password')
        }

}
 catch (error){
     res.status(401).json(error)
 }


}

//  to get all the employees

 exports.get=async(req,res)=>{

   

    try{
        
        const allemployees = await employees.find()
        res.status(200).json(allemployees)
    }
    catch(err){
       res.status(200).json(err)
    }

 }