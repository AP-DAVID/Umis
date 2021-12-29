const mongoose = require("mongoose");
import Subject from './Subject'
import Group from './Group'
import Admin from './Admin'

const TeacherSchema = new mongoose.Schema(
  {
    username : {
        type : String,
        required : [true, 'Please add a name'],
        min : 3,
        max : 20,
        trim: true,
        lowercase: true 
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



    email:{
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
    section: {
      type : String,
      default : "teacher"
    },
    status : {
      type : String,
      default : "active"
    },

    payment : {
      type : String,
      required : true
    },

    adminId : {
      type : String,
      required : true
    },

    profile : {
      type : String,
      default : ""
    },

    subject : [

      {
        type : mongoose.Types.ObjectId,
        ref : Subject
      }

    ],
    
    state : {
      type : String,
      default : ""
    },

    country : {
      type : String,
      default : ""
    },

    groups : [
       {
          type : mongoose.Types.ObjectId,
          ref : Group
       }
    ],

    

    password:{
        type: String,
        required : true,
        min : 6 
    },

    age :{
        type : Number,
        default : 0
    },
 


  },
  { timestamps: true }
);


module.exports = mongoose.models.Teacher || mongoose.model("Teacher", TeacherSchema);
