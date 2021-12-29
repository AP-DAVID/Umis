
import ConnectToDatabase from "../../../backend/server"
import Group from "../../../models/Group";
import Teacher from "../../../models/Teacher";
import Subject from "../../../models/Subject"
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
    const {groupname, adminId, subjectname, code, teacher, picture} = req.body

    

    try {
        const groupfind = await Group.findOne({groupname : groupname, adminId : adminId});
        const subjectfind = await Subject.findOne({subjectname : subjectname, adminId : adminId});



        if(groupfind){
            res.status(200).json("Class found");
        }

        if(!subjectfind){
          res.status(200).json("subject");
        }

       

       

        if(!groupfind && subjectfind){
          const newRegister = await Group.create({ groupname : groupname, adminId : adminId, picture : picture, subject : subjectfind._id, code : code, teacher : teacher});
          newRegister.save()

          const newGroup = await Teacher.findByIdAndUpdate(teacher,{
            $push : {groups : newRegister._id},
          });
          
          newGroup.save();

          res.status(201).json(newRegister)
        }
    } catch (error) {
        console.error(error)
    }
})


export default handler
