
import ConnectToDatabase from "../../../backend/server"

import Announcement from "../../../models/Announcement"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

export async function getData(id){
     
    try {
        const announce = await Announcement.findById(id);
        
        return announce
      
        
    } catch (error) {
        return {status : "something went wrong"};
    }
}

handler.get(async(req, res)=>{
   
    
     const announce = await getData();
     res.status(200).json(announce);
})


handler.delete(async(req, res)=>{
    const {
        query:{id}
    }= req
    
    try {
        const blog = await Announcement.findByIdAndDelete(id);
        !blog && res.status(404).json("blog doesn't exist");
        
        res.status(200).json("blog deleted")
        console.log("Blog deleted")
        
    } catch (error) {
            res.status(400).json({success:false, error:error})
        }
})



handler.put(async(req, res)=>{
const {
    query:{id}
}= req



try{
    const blog = await Announcement.findByIdAndUpdate(req.query.id,{
        $set : req.body,
    });
    res.status(200).json("Blog updated and shii")
}catch(err){
    return res.status(500).json(err)
}

});







export default handler
