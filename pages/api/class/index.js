
import ConnectToDatabase from "../../../backend/server"
import Class from "../../../models/Class";
import Admin from "../../../models/Admin"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

// handler.get(async(req, res)=>{
//   try {
//     const admin  =  await Admin.findById(id).populate("teachers").populate("students").exec();
//     res.status(200).json(admin)
//   } catch (error) {
//     res.status(400).json({success: false, error: error})
//   }
// })




handler.post(async(req, res) =>{
    const {classname, adminId} = req.body

    

    try {
        const classnamefind = await Class.findOne({classname : classname, adminId : adminId});

        if(classnamefind){
            res.status(200).json("Class found");
        }

       

       

        if(!classnamefind){
          const newRegister = await Class.create({ classname : classname, adminId : adminId});
          newRegister.save()

          const newClass = await Admin.findByIdAndUpdate(adminId,{
            $push : {classes : newRegister._id},
          });
          newClass.save();

          res.status(201).json(newRegister)
        }
    } catch (error) {
        console.error(error)
    }
})


export default handler
