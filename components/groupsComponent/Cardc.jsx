import { TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Popconfirm, message } from 'antd';
import { useRouter } from "next/router";
import axios from "axios";

function Cardc({name, text, data, picture, section, login}) {


    const [res, setRes] = useState();
    const router = useRouter();
    const [more, setMore] = useState(true)
    const [change, setChange] = useState(true)


    function cancel(e) {
        console.log(e);
        message.error('No biggie');
    }

    const handleDelete = async() => {

        

        try{
 
         const res = await axios.delete(`/api/comment/${data?._id}`);
 
         await router.replace(router.asPath);
         message.success("Text deleted successfully")
 
        }catch(error){
          console.log(error)
          router.replace(router.asPath);
        }
 
   }

    useEffect(() => {
        let string = text;  
        let count = 0;  

        for(let i = 0; i < string.length; i++) {  
            if(string.charAt(i))  {
                count++;  
    
            }
        }  

        setRes(count)
        
    },[text])

    return (
        <div style={{maxWidth : "900px"}} className ="border-2 w-full overflow-auto  py-3 mb-2 shadow-md rounded-md  break-all" >
            <div className ="flex space-x-4 ml-3 break-all">
               

                <div className="flex flex-col cursor-pointer space-y-2l break-all object-contain">
                    <h1 className = "font-bold flex items-center space-x-3 px-2 text-base">
                       <img src= {picture ? picture : "https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso="} className="h-9 mr-2 relative w-9 object-cover rounded-full"/>
                        {name}

                       {  section === login?._id &&
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
                    </h1>

                    <h1 className = {`${more ? "line-clamp-6" : "line-clamp-none"} font-medium text-base break-all`}>
                       {text}
                    </h1>
                </div>
               
            </div>
            {
                       res > 184 &&
                        ( 
                            <div>
                                {change && more ?

                                    (<h1 onClick={() => setMore(false)} className="text-sm cursor-pointer text-blue-500 ">read more ...</h1>)

                                    : (<h1 onClick={() => setMore(true)} className="text-sm cursor-pointer text-blue-500 ">truncate...</h1>)
                            
                                }
                            </div>
                            )
                }
        </div>
    )
}

export default Cardc;
