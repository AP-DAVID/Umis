const mongoose = require("mongoose");
import Subject from './Subject'
import Admin from './Admin'
import Student from './Student'

const ClassSchema = new mongoose.Schema(
  {

    


    classname : {
       type : String,
       required : true
    },


    adminId :  {
      type : String,
      required : true
    },
    
    subjects : [
      {
           type : mongoose.Types.ObjectId,
           ref : Subject
      }
      
   ],

   students : [
     {
       type : mongoose.Types.ObjectId,
       ref : Student
     }
   ],

 },
  { timestamps: true }
);




module.exports = mongoose.models.Class || mongoose.model("Class", ClassSchema);
