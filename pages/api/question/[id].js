
import ConnectToDatabase from "../../../backend/server"

import Question from "../../../models/Question"
import Group from "../../../models/Group"
import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();



handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const question = await Question.findByIdAndDelete(id);
        !question && res.status(404).json("blog doesn't exist");

        const group = await Group.findOneAndUpdate({
            $pull : {text : id}
       })

       group.save()
        
        res.status(200).json("question deleted")
        console.log("question deleted")
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})



handler.put(async(req, res)=>{
const {
    query:{id}
}= req



try{
    const blog = await Question.findByIdAndUpdate(id,{
        $push : req.body,
    });
    res.status(200).json("Blog updated and shii")
}catch(err){
    return res.status(500).json(err)
}



});







export default handler
