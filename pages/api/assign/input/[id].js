
import ConnectToDatabase from "../../../../backend/server"

import Assignment from "../../../../models/Assignment"


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
      const blog = await Assignment.findByIdAndUpdate(id,{
          $set : req.body,
      });
      res.status(200).json("Assignment updated and shii")
  }catch(err){
      return res.status(500).json(err)
  }
  
  });

  handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const assign = await Assignment.findByIdAndDelete(id);
        !assign & res.status(404).json("assignment doesn't exist");

       
        
        res.status(200).json("assignment deleted")
        
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})




  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }






export default handler
