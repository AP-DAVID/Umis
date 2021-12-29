
import ConnectToDatabase from "../../../backend/server"
import Comment from "../../../models/Comment";
import Question from "../../../models/Question";
import Admin from "../../../models/Admin"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

// handler.get(async(req, res)=>{
//   try {
//     const admin  =  await Admin.findById(id).populate("teachers").populate("students").exec();
//     res.status(200).json(admin)
//   } catch (error) {
//     res.status(400).json({success: false, error: error})
//   }
// })




handler.post(async(req, res) =>{
    const {questionId, text, firstname, lastname, sectionId, picture} = req.body




    

    try {
      

          const newRegister = await Comment.create({ text : text, sectionId : sectionId, questionId : questionId, firstname : firstname, lastname : lastname,  picture : picture});
          newRegister.save()

          const newQuest = await Question.findByIdAndUpdate(questionId,{
            $push : {comments : newRegister._id},
          });
          
          newQuest.save();

          res.status(201).json(newRegister)
    
    } catch (error) {
        console.error(error)
    }
})




export default handler
