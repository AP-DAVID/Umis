import Student from './Student'

const mongoose = require("mongoose");

const ResultlistSchema = new mongoose.Schema(
  {
     subjectname : {
         type : String,
         required : true
     },

     student : [
        {
            type : mongoose.Types.ObjectId,
            ref : Student
        }
     ],

     term : {
         
        type : String
     },
     
     classname : {
        type : String
     },

     score : {
         type : Number
     },
     grade : {
         type : String,
         default : "NA"
     },
    


  },
  { timestamps: true }
);

module.exports = mongoose.models.Resultlist || mongoose.model("Resultlist", ResultlistSchema);