
const mongoose = require("mongoose");
import Comment from "./Comment";

const QuestionSchema = new mongoose.Schema(
  {
     text : {
         type : String,
         required : true
     },
     picture : {
        type : String
     },
     sectionId : {
        type : String
     },
     comments : [
         {
            type : mongoose.Types.ObjectId,
            ref : Comment
         }
     ],
     groupId : {
         type : String
     },
     image : {
         type : String
     },
     firstname : {
         type : String
     },
     lastname : {
         type : String
     }

  },
  { timestamps: true }
);

module.exports = mongoose.models.Question || mongoose.model("Question", QuestionSchema);