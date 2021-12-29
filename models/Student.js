const mongoose = require("mongoose");
import Class from './Class'
import Group from './Group'
import Result from './Result'
import Admin from './Admin'


const StudentSchema = new mongoose.Schema(
  {

    username : {
        type : String,
        required : [true, 'Please add a name'],
        min : 3,
        max : 20,
        trim: true,
        lowercase: true 
    },

    email:{
      type : String,
      required : true,
      max : 50,
      unique : true,
      trim: true

    },

    state : {
      type : String,
      default : ""
    },

    country : {
      type : String,
      default : ""
    },

    firstname:{

      type : String,
      required : true,
      max : 50,
      unique : true,
      trim: true

   },

   lastname:{
    type : String,
    required : true,
    max : 50,
    unique : true,
    trim: true

   },

    contact : {
      type : Number,
      default : 0
    },

    status : {
      type : String,
      default : "unpaid"
    },

    section: {
      type : String,
      default : "student"
    },

    adminId : {
      type : String,
      required : true
    },

    profile : {
      type : String,
      default : ""
    },

    payment : {
      type : String,
      required : true
    },

    password:{
        type: String,
        required : true,
        min : 6 
    },

    age :{
        type : Number,
        default : 0
    },

    groups : [
      {
        type : mongoose.Types.ObjectId,
        ref : Group
      }
    ],
    results : [
      {
        type : mongoose.Types.ObjectId,
        ref : Result
      }
    ],

    class : 
      [
          {
              
            type : mongoose.Types.ObjectId,
            ref : Class

          }
    ],
    


  },
  { timestamps: true }
);


module.exports = mongoose.models.Student || mongoose.model("Student", StudentSchema);
