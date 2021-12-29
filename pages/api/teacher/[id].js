import ConnectToDatabase from "../../../backend/server"
import Admin from "../../../models/Admin";
import Subject from "../../../models/Subject";
import Student from "../../../models/Student";
import Teacher from "../../../models/Teacher"
import Class from "../../../models/Class"
import Assignment from "../../../models/Assignment"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

export async function getData(id){

    try {

        const loginn = await Teacher.findById(id).populate({
            path: "subject", // populate classes
            populate: {
               path: "classId",
                populate : {
                    path : "students",
                    model : Student
                },
               model : Class // in classes, populate subjects
            },
            model : Subject
           
            
         }).populate({
            path: "groups", // populate groups
            populate: [{
               path: "subject",
               populate : {
                    path : "classId",
                    model : Class
               },
               model : Subject // in groups, populate subjects
            },
            {
                path : "teacher",
                model : Teacher
            },
            {
                path: "students",
                model : Student // in groups, populate subjects
            },
            {
                path: "assignment",
                populate : {
                    path : "submission",
                    model : Student
                   },
                model : Assignment // in groups, populate subjects
            }]

           
            
         }).exec();


          // populate: {
            //     path: "students",
            //     model : Student // in classes, populate subjects
            //  },


         return loginn

    } catch (error) {
       return error
    }

}



handler.get(async(req, res)=>{
    
    const loginn = await getData();
    res.status(200).json(loginn);
   
})

handler.put(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    
    
    try{
        const teacher = await Teacher.findByIdAndUpdate(id,{
            $set : req.body,
        });
        res.status(200).json("teacher updated and shii")
    }catch(err){
        return res.status(500).json(err)
    }
    
});

handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const student = await Teacher.findByIdAndDelete(id);
        !student && res.status(404).json("teacher doesn't exist");
        
        res.status(200).json("teacher deleted")
        console.log("teacher deleted")
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})


  
export default handler;