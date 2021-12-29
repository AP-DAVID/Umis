
import ConnectToDatabase from "../../../../backend/server"
import Teacher from "../../../../models/Teacher";

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

handler.get(async(req, res)=>{

  const {
    query:{id}
  }= req

  try {
    const result  =  await Teacher.findOne({email : id})
  

   
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
})


export default handler
