
import ConnectToDatabase from "../../../backend/server"

import Assignment from "../../../models/Assignment"
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

  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }




handler.post(async(req, res) =>{
    const {groupId, title, picture, body, totalmark} = req.body

    

    try {
      
          const newAssignment = await Assignment.create({groupId : groupId, totalmark : totalmark, picture : picture, title : title, body : body});
          newAssignment.save();
            
          const newGroup = await Group.findByIdAndUpdate(groupId,{
            $push : {assignment : newAssignment._id},
          });

          newGroup.save();


          res.status(201).json(newAssignment)
      
    } catch (error) {
        console.error(error)
    }
})


export default handler
