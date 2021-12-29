import ConnectToDatabase from "../../../backend/server"
import Admin from "../../../models/Admin";
import Subject from "../../../models/Subject";
import Student from "../../../models/Student";
import Teacher from "../../../models/Teacher"
import Class from "../../../models/Class"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


export async function getData(id) {
      

   try {

      const loginn = await Admin.findById(id).populate("teachers").populate({
          path: "students", // populate classes
          populate: {
             path: "class",
             model : Class // in classes, populate subjects
          },
          model : Student
         
          
       }).populate({
          path: "classes", // populate classes
          populate: {
             path: "subjects",
             populate : {
              path : "teacher",
              model : Teacher
             },
             model : Subject // in classes, populate subjects
          },
          model : Class
          
       }).populate({
          path: "classes", // populate classes
          populate: {
             path: "students",
             model : Student// in classes, populate subjects
          },
          model : Class
         
          
       }).exec();


        // populate: {
          //     path: "students",
          //     model : Student // in classes, populate subjects
          //  },


       return loginn;

  } catch (error) {
      return error
  }
     
}



handler.get(async(req, res)=>{
    
    const loginn = await getData();
    res.status(200).json(loginn);
    
})



  
export default handler;