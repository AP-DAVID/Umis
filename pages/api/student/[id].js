import ConnectToDatabase from "../../../backend/server"
import Admin from "../../../models/Admin";
import Subject from "../../../models/Subject";
import Student from "../../../models/Student";
import Teacher from "../../../models/Teacher"
import Result from "../../../models/Result"
import Class from "../../../models/Class"
import Assignment from "../../../models/Assignment"
import Resultlist from '../../../models/Resultlist'

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


export async function getData(id){

    try {

        const loginn = await Student.findById(id).populate({
            path: "class", // populate classes
            populate: [{
                path: "subjects",
                populate : [{
                 path : "classId",
                 model : Class
                }, {
                  path : "teacher",
                  model : Teacher
                }],
                model : Subject // in classes, populate subjects
            },{
               path : "students",
               model : Student
            }
        
            ],
            model : Class
           
           
            
         }).populate({
            path : "results",
            populate  : {
                path : "results",
                model : Resultlist
            },
            model : Result

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
        const student = await Student.findByIdAndUpdate(id,{
            $set : req.body,
        });
        res.status(200).json("student updated and shii")
    }catch(err){
        return res.status(500).json(err)
    }
    
});

handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const student = await Student.findByIdAndDelete(id);
        !student && res.status(404).json("student doesn't exist");
        
        res.status(200).json("student deleted")
        console.log("student deleted")
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})






  
export default handler;