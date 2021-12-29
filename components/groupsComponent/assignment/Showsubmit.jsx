
import {format} from "timeago.js"
import Interweave from 'interweave';
import { InputNumber } from 'antd';
import { useState } from "react";
import Loader from "../../Loader";
import axios from "axios";
import { useRouter } from "next/router";


function Showsubmit({setOpenModal, data, details, date, student, answer, index}) {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();
    const [form, setForm] = useState(
      {
        mark : ''
      }
    )


    const onChange = (value) => {
      setForm({
         ...form,
         mark : value
       });
     }

     const handleSubmit = async () => {
        
         if(form.mark != ''){
            
             setOpen(true);
             
             const config = {
              headers: {
                  "Accept" : "application/json",
                  'Content-type' : "application/json"
              }
            }

            try{

              const response = await axios.put(`/api/assign/${data._id}`, form, config);

              await router.replace(router.asPath);
              await  setOpen(false)

            }catch(error){
              console.log(error);
              setMessage("Something went wrong");
              setOpen(false)
            }
         }else{
           setMessage("Enter the mark")
         }
     }

    return (
        <div className="px-5">
             <div
          className="justify-center px-3 h-screen py-2 w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <Loader open={open} setOpen={setOpen}/>
          <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                   {student[0]?.lastname} - {student[0]?.firstname}
                </h3>
                
              </div>
              {/*body*/}

              <div className="flex justify-center">
                    <h1 className="font-medium text-red-500 text-center p-4 text-base">{message}</h1>
              </div>


              <div className="flex flex-col space-y-4">
                 <div className="flex justify-end items-center">
                  
                    
                    {  
                    
                      index === -1 ? (
                        <div className="space-x-2 flex items-center px-3">

                          {data?.mark && <h1 className="text-lg text-black border-2 border-blue-500 rounded-full px-2 py-2 font-bold">{data?.mark}</h1>}
                           
                           {data.mark ? (<h1 className="text-lg text-black font-bold">Update Score</h1>) : (<h1 className="text-lg text-black font-bold">Score</h1>)}
                          
                          <InputNumber onChange={onChange} value={form.mark} name="mark" type="number" className=" px-2  h-10 border-2 border-red-500  rounded-md" min={0} max={parseInt(details?.totalmark)} defaultValue="score"  />
                        </div>
                       ) : (
                         
                          <div className="space-x-2 flex items-center px-3"> 
                               <h1 className="text-lg text-black font-bold">Mark : {data?.mark}</h1>   
                          </div>

                       )
                    }
                    
                 </div>

                 <h1 classname="px-5 py-2">
                    <Interweave className="mr-3 px-5" tagName="div" content={answer} />
                 </h1>

                 <h1 className="text-gray-600 px-2 text-base">
                     {date}
                 </h1>
              </div>

                
                  
                  

            
                    

                 
              
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>
                {
                  index === -1 && (
                      <button
                        onClick={handleSubmit}
                        className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Enter
                      </button>
                  )
                }
               
              </div>
            </div>

            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default Showsubmit
