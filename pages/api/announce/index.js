
import ConnectToDatabase from "../../../backend/server"

import Announcement from "../../../models/Announcement"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


handler.get(async(req, res)=>{
    
  const {
     query:{id}
  }= req

    try {
      const blogs  = await Announcement.find({adminId : id});
      res.status(200).json(blogs)
    } catch (error) {
      res.status(400).json({success: false, error: error})
    }
})

  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }




handler.post(async(req, res) =>{
    const {adminId, title, body, desc, image, profile, firstname, lastname, userId,  section} = req.body

    

    try {
       


       

       

       
          const newAnnouncement = await Announcement.create({profile : profile, userId : userId, section : section, firstname : firstname, lastname : lastname, title : title, body : body, desc : desc, image : image, adminId : adminId});
          newAnnouncement.save();


          res.status(201).json(newAnnouncement)
      
    } catch (error) {
        console.error(error)
    }
})


export default handler
