import { BookOpenIcon, ClipboardListIcon } from "@heroicons/react/outline"
import Interweave from 'interweave';
import { useState } from "react";
import Comment from "./Comment"
import { Popconfirm, message } from 'antd';
import { Avatar, Image } from 'antd';
import { TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import axios from "axios";




function Slate({text, data, profile, section, name, login, comment}) {

    const [openn, setOpenn] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    function cancel(e) {
      console.log(e);
      message.error('No biggie');
  }

  const handleDelete = async() => {

       try{

        const res = await axios.delete(`/api/question/${data}`);

        await router.replace(router.asPath);
        message.success("Text deleted successfully")

       }catch(error){
         console.log(error)
         router.replace(router.asPath);
       }

  }


    return (
        <>
        <div className=" border  w-full rounded-lg  ">
                   <div className="flex space-x-4 items-center py-1 px-4"> 
                     {
                         profile ? (
                          <Avatar src={<Image src={profile} className="rounded-full h-8 w-8 object-cover" style={{ width: 32, height : 32 }} />} />
                             
                         ) : (
                            <ClipboardListIcon className="h-9 w-9"/>
                         )
                     }

                     <div><h1 className="text-base font-medium ">{name}</h1></div> 

                      { section === login?._id &&
                        <Popconfirm
                            title="Are you sure to delete this comment?"
                            onConfirm={handleDelete}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <TrashIcon className="h-5 w-5 text-blue-500 hover:text-red-500" />
                        </Popconfirm>

                      }
                      
                   </div>

                

                   <div className="flex space-x-3 px-4 text-gray-600 items-center">
                       
                       
                       <Interweave className={`mr-3 ${!openn ? "line-clamp-5" : "line-clamp-none"}`} tagName="div" content={text} />

                     { 
                       !openn ? (
                        <h1 onClick={() => setOpenn(!openn)} className="text-blue-500 text-xs font-medium">Read more</h1>

                       ): 
                       <h1 onClick={() => setOpenn(!openn)} className="text-blue-500 text-xs font-medium">Truncate</h1>
                        
                     }


                   </div>

                   <Comment open={open} comment={comment} login={login} data = {data} image={profile} setOpen={setOpen}/>

                   <div onClick={() => setOpen(!open)} className="border-2 rounded-md cursor-pointer hover:border-red-500 h-full mt-2 py-2 w-full border-blue-500">
                        <h1 className="text-purple-500 hover:text-red-500 font-medium px-12">Add class comment</h1>
                   </div>

       </div>

       </>
    )
}

export default Slate
