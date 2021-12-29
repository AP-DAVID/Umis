
import ConnectToDatabase from "../../../backend/server"

import Assignment from "../../../models/Assignment"
import Submission from "../../../models/Submission"
import Group from "../../../models/Group"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


// handler.get(async(req, res)=>{
    
//   const {
//      query:{id}
//   }= req

//     try {
//       const blogs  = await Assignment.find({adminId : id});
//       res.status(200).json(blogs)
//     } catch (error) {
//       res.status(400).json({success: false, error: error})
//     }
// })

handler.put(async(req, res)=>{
  const {
      query:{id}
  }= req

  try{
      const blog = await Submission.findByIdAndUpdate(id,{
          $set : req.body,
      });
      res.status(200).json("Submission updated and shii")
  }catch(err){
      
  }
  
  });


  handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const submission = await Submission.findByIdAndDelete(id);
        !submission & res.status(404).json("submission doesn't exist");

        const assignment = await Assignment.findOneAndUpdate({
             $pull : {submission : id}
        })

        assignment.save();
        
        res.status(200).json("submission deleted")
        
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})



handler.post(async(req, res)=>{
    const {
        query:{id}
    }= req

    const {answer, studentId} = req.body
    
    
    
    try{
        
        const findSubmit = await Submission.findOne({student : studentId});

        if(findSubmit){
            res.status(200).json('found');
        }else{
           
            const newSubmission = await Submission.create({student : studentId, answer : answer});
            newSubmission.save();
  
            const assign = await Assignment.findByIdAndUpdate(id,{
              $push : {submission : newSubmission._id}
            });
          
            assign.save();
  
            res.status(200).json("assignment submitted and shii")


        }

        

    }catch(err){
        return res.status(500).json(err)
    }
    
    
    
});


  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }






export default handler
