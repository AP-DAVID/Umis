import { PlusIcon } from "@heroicons/react/solid"
import { useState } from "react";
import AssignCard from "./AssignCard";
import { Avatar, Image } from 'antd';
import Modalass from "./Modalass";

function Assign({login, data}) {

    const assignment = data?.assignment;
    
  
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="flex px-2 space-y-4 flex-col items-center py-5">

            <div className="px-5 py-5 w-full sm:w-3/4  rounded-lg shadow-md border">
                <h1 className="px-2 py-2">View all Classwork/Assignment here</h1>
            </div>

            {/* <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} /> */}
            <div>
              {
                 assignment.map((a) => (
                    <AssignCard key={a?._id} data={login}  details={a} title={a?.title} body={a?.body}/>
                 ))
              }
{/* 
                <AssignCard details ={data}  title="heyy" body=""/> */}
            
               

            </div>



           { login.section === "teacher" && ( 
           
                   <div onClick = {() => setOpenModal(true)}  className="px-2 py-4 rounded-full cursor-pointer fixed p-14 bottom-8 right-3 sm:right-80 origin-bottom-right space-y-2 text-align group">
                        <div className="invisible group-hover:visible  "><h1 className="text-sm text-gray-500 font-md">add</h1></div>
                        <div className="rounded-full px-3 py-3 bg-blue-500"><PlusIcon className="hover:animate-spin h-6 w-6"/></div>
                   </div>
            
            )
            
            }

            {
               openModal && (
                   <Modalass data={data} setOpenModal = {setOpenModal} openModal = {openModal}/>
               )
            }
            
        </div>
    )
}

export default Assign
