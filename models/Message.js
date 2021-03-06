const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId :{
        type : String,
    },
    sender: {
       type: String,
    },
    profile : {
      type : String,
    },
    text : {
        type : String,
    },
    picture : {
      type : String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Message || mongoose.model("Message", MessageSchema);

