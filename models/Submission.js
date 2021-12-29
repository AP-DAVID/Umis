const mongoose = require("mongoose");
import Subject from './Subject'
import Student from './Student'

const SubmissionSchema = new mongoose.Schema(
  {
    
    answer : {
        type : String,
    },

    
    mark : {
      type : String,
    },

    student : [
        {
           type : mongoose.Types.ObjectId,  
           ref : Student,
           
            
        },

    ]


  },
  { timestamps: true }
);




module.exports = mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);
