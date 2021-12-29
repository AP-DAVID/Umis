const mongoose = require("mongoose");
import Subject from './Subject'
import Student from './Student'
import Teacher from './Teacher'
import Admin from './Admin'
import Assignment from './Assignment'
import Question from './Question';

const GroupSchema = new mongoose.Schema(
  {
    
    groupname : {
        type : String,
        required : true
    },

    subject : 
       [{
            type : mongoose.Types.ObjectId,
            ref : Subject
       }],

    code : {
        type : String,
        required : true
    },

    picture : {
        type : String,
    },

    teacher : [
        {
            type : mongoose.Types.ObjectId,
            ref : Teacher
        }
    ],

    adminId : {
        type : String,
        required : true
    },




    students : [
        {
            type : mongoose.Types.ObjectId,
            ref : Student
        }
    ],

    text : [
        {
            type : mongoose.Types.ObjectId,
            ref : Question
        }
    ],

    
    assignment : [
        {
            type : mongoose.Types.ObjectId,
            ref : Assignment
        }
    ]


     

     

   

 


  },
  { timestamps: true }
);




module.exports = mongoose.models.Group || mongoose.model("Group", GroupSchema);
