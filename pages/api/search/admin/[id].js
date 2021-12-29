
import ConnectToDatabase from "../../../../backend/server"
import Admin from "../../../../models/Admin";

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

handler.get(async(req, res)=>{

  const {
    query:{id}
  }= req

  try {
    const admin  =  await Admin.findOne({email : id})
  

   
    res.status(200).json(admin)
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
})


export default handler
