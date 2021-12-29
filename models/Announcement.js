const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    
    title : {
        type : String,
        required : true
    },

    desc : {
        type : String,
    },
    profile : {
         type : String,
    },
    userId : {
        type : String,
    },

    adminId : {
        type : String,
    },

    section : {
        type : String
    },

    body : {
        type : String,
    },
    firstname : {
        type : String,
    },
    lastname : {
        type : String
    },

    image : {

           type : String,
           default : 'https://media.istockphoto.com/photos/important-announcement-written-under-torn-paper-picture-id1293168940?b=1&k=20&m=1293168940&s=170667a&w=0&h=c58Qfjgzx9up5v8sGOOnbLIBqPAYDknGMsKCtmBuz_M='
           
  

    }


     

     

   

 


  },
  { timestamps: true }
);




module.exports = mongoose.models.Announcement  || mongoose.model("Announcement", AnnouncementSchema );
