
import ConnectToDatabase from "../../../backend/server"

import Question from "../../../models/Question"
import Comment from "../../../models/Comment"


import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();




  handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const comment = await Comment.findByIdAndDelete(id);
        !comment & res.status(404).json("comment doesn't exist");

        const question = await Question.findOneAndUpdate({
             $pull : {comments : id}
        })

        question.save();
        
        res.status(200).json("submission deleted")
        
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})

export default handler