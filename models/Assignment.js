const mongoose = require("mongoose");
import Subject from './Subject'
import Submission from './Submission'

const AssignmentSchema = new mongoose.Schema(
  {
    
    groupId : {
        type : String,
    },

    close : {
       
        type : Boolean,
        default : false
    },

    totalmark : {
      type : String,
    },

    
    title : {
      type : String,
    },

    picture : {
       type : String
    },
    
    body : {
        type : String,
    },

    submission : [
        {
           type : mongoose.Types.ObjectId,  
           ref : Submission,
           
            
        },

    ]


  },
  { timestamps: true }
);




module.exports = mongoose.models.Assignment || mongoose.model("Assignment", AssignmentSchema);
