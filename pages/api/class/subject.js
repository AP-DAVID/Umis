
import ConnectToDatabase from "../../../backend/server"
import Class from "../../../models/Class";
import Subject from "../../../models/Subject"
import Teacher from "../../../models/Teacher"

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
    
    const {subjectname, classId, picture, teacher, adminId} = req.body

    

    try {
        // const subjectname = await Class.findOne({subjectname : subjectname});

     

       

       

         if(teacher != "" && picture != ""){

              const teacherfind = await Teacher.findOne({firstname : teacher, adminId : adminId});


              const newRegister = await Subject.create({ subjectname : subjectname, adminId : adminId, classId : classId, picture : picture, teacher : teacherfind._id});
              newRegister.save()



              const enrollClass = await Class.findByIdAndUpdate(classId,{
                $push : {subjects : newRegister._id},
              });

              enrollClass.save();
             

             const enrollTeacher = await Teacher.findOneAndUpdate({firstname : teacher, adminId : adminId}, { $push : {subject : newRegister._id}});
              
               enrollTeacher.save();

              res.status(201).json(newRegister)
         }

         else if(teacher === ""){

            const newRegister = await Subject.create({ subjectname : subjectname, adminId : adminId, classId : classId, picture : picture});
            newRegister.save()

            const enrollClass = await Class.findByIdAndUpdate(classId,{
              $push : {subjects : newRegister._id},
            });
            enrollClass.save();

            res.status(201).json(newRegister)

         }
         else {

            const teacherfind = await Teacher.findOne({firstname : teacher, adminId : adminId});

            const newRegister = await Subject.create({ subjectname : subjectname, adminId : adminId, classId : classId, teacher : teacherfind._id});
            newRegister.save()

            const enrollClass = await Class.findByIdAndUpdate(classId,{
              $push : {subjects : newRegister._id},
            });
            enrollClass.save();

            const enrollTeacher = await Teacher.findOneAndUpdate({firstname : teacher, adminId : adminId}, { $push : {subject : newRegister._id}});
              
            enrollTeacher.save();

            res.status(201).json(newRegister)

         }
          

         
          
          
          

          


       
    } catch (error) {
        console.error(error)
    }
})


export default handler
