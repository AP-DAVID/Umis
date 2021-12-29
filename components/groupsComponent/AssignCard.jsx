import { useEffect, useState } from "react";
import {format} from "timeago.js"
import Interweave from 'interweave';
import AnswerModal from './assignment/AnswerModal'
import Submissions from "./assignment/submissionModal";
import {TrashIcon} from '@heroicons/react/solid'
import { Popconfirm, message } from 'antd';
import axios from "axios";
import { useRouter } from "next/router";

function AssignCard({title, body, details, data}) {

   const [openModal, setOpenModal] = useState(false);
   const router = useRouter();
   const [open, setOpen] = useState(false);


 
   function cancel(e) {
    console.log(e);
    message.error('No biggie');
  }

  const handleDelete = async(e) => {

        setOpenModal(false);
       try{
         
          const response = await axios.delete(`/api/assign/input/${details?._id}`);
          
          await router.replace(router.asPath);
          message.success("successfully deleted")

       }catch(error){
         console.log(error)
         message.success("deleted succesfully")
       }
  }
   
  var found = details.submission.findIndex(function(post, index) {
	if(post.student[0]._id === data?._id)
		return true;
});

   

//    const findId = details?.submission?.student?.find((m) => m === data?._id )

//    console.log(findId);


    return (
        <div  style={{maxWidth : "900px"}} className ="border-2 hover:border-blue-500 w-full cursor-pointer  overflow-auto  py-4 mb-2 shadow-lg rounded-md  break-all" >
            <div onClick={data.section === "student" && found === -1 ? () => setOpenModal(true) : () => setOpen(true)} className ="flex space-x-4 ml-3 break-all">
               

                <div  className="flex flex-col  space-y-2 break-all object-contain">

                  <div className="flex items-center justify-between ">
                     <div><h1 className = "font-bold line-clamp-1 flex items-center space-x-3 px-2 text-base">
                       {title}
                     </h1></div>
                      
                      {data?.section === "teacher" && 
                            <Popconfirm
                              title="Are you sure to delete this task?"
                              onConfirm={handleDelete}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No"
                            >
                              <div className="px-2">
                                <TrashIcon className="h-4 w-4 text-blue-500 hover:text-red-500"/>
                              </div>
                           </Popconfirm>
                          
                      }
                     
                  </div>

                    <h1 className = {` "line-clamp-2" font-medium text-base break-all`}>
                       <Interweave className="mr-3 line-clamp-2" tagName="div" content={body} />
                    </h1>
                    
                    <h1 className='text-sm  text-gray-500'>
                        {format(details.createdAt)}
                    </h1>
                </div>
               
            </div>


           {openModal && details.close != true && ( <AnswerModal body={body} title={title} assignId= {details?._id} studentId = {data?._id} setOpenModal={setOpenModal} openModal={openModal}/>
           )}

           {openModal && details.close === true && message.error('Submission has been closed')}

           <div className="px-14">{open && ( <Submissions index={found} setOpenn={setOpen} data={details} login ={data}  />)}</div>
        </div>
    )
}

export default AssignCard;
