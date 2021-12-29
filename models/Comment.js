
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
     text : {
         type : String,
         required : true
     },
     firstname : {
         type : String
     },
     lastname : {
         type : String
     },
     sectionId : {
         type : String
     },
     picture : {
         
        type : String
     },
     questionId : {

         type : String
     }


  },
  { timestamps: true }
);

module.exports = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);