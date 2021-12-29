const mongoose = require("mongoose");
import Teacher from './Teacher'
import Class from './Class'

const SubjectSchema = new mongoose.Schema(
  {
    adminId : {
      type : String,
      required : true
    },
    subjectname : {
        type : String,
        required : true
    },

    classId : [
      {
           type : mongoose.Types.ObjectId,
           ref : Class
      },
      
   ],

    picture : {
      type : String,
      default : "https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpb2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    teacher : [
        {
            type : mongoose.Types.ObjectId,
            ref : Teacher
        }
    ],

   

 


  },
  { timestamps: true }
);




module.exports = mongoose.models.Subject || mongoose.model("Subject", SubjectSchema);
