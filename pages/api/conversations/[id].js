import ConnectToDatabase from "../../../backend/server"
import Conversation from "../../../models/Conversation";
import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();

export async function getData(id){

    try{
        const conversation = await Conversation.find({
            members: { $in: [id] },
        });
        return conversation
    }catch(err){
        return err
    }

}

//gets conversation of the user
handler.get(async(req, res)=>{
    const conversation = await getData();
    res.status(200).json(conversationn);
    
})



  
export default handler;