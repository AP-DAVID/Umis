import Resultlist from './Resultlist'

const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
  {
     studentId : {
          type : String
     },
     results : [
        {
            type : mongoose.Types.ObjectId,
            ref : Resultlist
        }
     ],

     adminId : {
         type : String,
         
     },
   
     term : {
         
        type : String
     },
     classname : {
        type : String
     },
     totalscore : {
         type : Number
     },
     show : {

         type : Boolean,
         default : false
     }


  },
  { timestamps: true }
);

module.exports = mongoose.models.Result || mongoose.model("Result", ResultSchema);