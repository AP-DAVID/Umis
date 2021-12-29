
import ConnectToDatabase from "../../../backend/server"

import Announcement from "../../../models/Announcement"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


export async function getData(id){

  try {
    const blogs  = await Announcement.find({adminId : id});
    return blogs
  } catch (error) {
    return {
      status : "the blogs are invalid"
    }
  }
   
}
 

handler.get(async(req, res)=>{
   
  const blogs = await getData();
  res.status(200).json(blogs);

    
})

  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }


  
export default handler