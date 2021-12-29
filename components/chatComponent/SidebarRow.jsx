import { UserCircleIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react";
import axios from 'axios'


function SidebarRow({conversation, currentUser}) {

    const [user, setUser] = useState(null);

    useEffect(() =>{
        const friendId = conversation.members.find((m) => m !== currentUser._id )
        
        const getUser = async () =>{

            try{
                const res = await axios.get(`/api/conv/${friendId}`);
                setUser(res.data);
             
            }
            catch(err){
                console.log(err)
            }
          
        };
        getUser();

    }, [currentUser, conversation])



    return (
        <div className="flex cursor-pointer group border-b  py-2 sm:px-3 sm:space-x-7">

            <div className="flex items-center  space-x-3">
                <div>
                {
                    user?.profile ? 
                       (
                            <div>
                                <img src={user?.profile} className="h-8 w-8 rounded-full object-cover"/>
                            </div>
                       ):
                       (
                        <UserCircleIcon className="h-8 text-blue-500 w-8 rounded-full group-hover:animate-bounce"/>
                       )
                }
                
                </div> 

                <div className=" flex-col ">
                    <h1 className="text-base font-medium group-hover:text-blue-500 hidden sm:inline-flex">{user?.firstname}</h1>
                    <h1 className="text-gray-500 text-sm hidden sm:inline-flex"> the recent chat</h1>
                </div>
            </div>

            <div>
                <h1 className="text-sm font-medium hidden lg:inline-flex group-hover:text-blue-500">Date</h1>
            </div>
           
        </div>
    )
}

export default SidebarRow
