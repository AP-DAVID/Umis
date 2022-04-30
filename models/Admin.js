const mongoose = require("mongoose");
import Teacher from "./Teacher";
import Student from "./Student";
import Class from "./Class"


const AdminSchema = new mongoose.Schema(
  {
    username : {
        type : String,
        required : [true, 'Please add a name'],
        min : 3,
        max : 25,
       
    },
    phone : {
        type : Number,
        required : true
    },
    country : {
        type : Number,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    schoolname : {
        
        type : String,
        required : true
    },
    
    email:{
        type : String,
        required : true,
        max : 50,
        unique : true,
        trim: true
 
    },
    section: {
        type : String,
        default : "admin"
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
    
    teachers :[ 
        {
            type : mongoose.Types.ObjectId,
            ref : Teacher

        }
    ],

    payment : {
        type : String,
        required : true
    },

    students : 
    [
        {
            type : mongoose.Types.ObjectId,
            ref :  Student
        }
    ],

    classes : 
    [
        {
            type : mongoose.Types.ObjectId,
            ref : Class
        }
    ]
    


  },
  { timestamps: true }
);


module.exports = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
