
import {format} from "timeago.js"
import Interweave from 'interweave';
import { PencilAltIcon } from "@heroicons/react/outline";


function List({setOpenModal, result, d}) {


    return (
        <div className="px-5">
             <div
          className="justify-center px-3 h-screen py-2 w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Your {d.classname} {d.term} term Result
                </h3>
                
              </div>
              {/*body*/}

              <div>
                    {
                        result.map((r) => (

                            <div className="px-5 py-3 flex justify-between items-center border-b-2 overflow-x-scroll scrollbar-hide">
                                
                                
                                <div className="px-2 flex w-full justify-around">

                                        <div className="font-bold text-lg truncate px-3">{r.subjectname}</div>
                                    
                                        <div className="font-bold text-lg truncate px-3">{r.score}</div>
                                        <div className="font-bold text-lg truncate px-3">{r.grade}</div>

                                </div>
                                
                            

                               
                            </div>

                        ))
                    }
                      


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
           
              </div>
            </div>

            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default List
