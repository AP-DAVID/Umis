import { PlusIcon } from "@heroicons/react/outline"
import { useState } from "react"
import AddSubject from "./addSubject"
import { Avatar, Image } from 'antd';
import { UserCircleIcon, PencilAltIcon } from "@heroicons/react/outline"
import Subjects from "./Subjects";



function List({setShowModal, setShowSubjects, login, data}) {

    const [modal, setModal] = useState(false)
    

    
    

    return (


        <div>


        <div
          className="justify-center h-screen w-screen items-center flex scrollbar-hide overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >

          
          <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full px-2">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">

                <h3 className="text-3xl font-semibold">
                   {setShowModal ? "Your Students" : "The class Subjects" }
                </h3>
                
              </div>
              {/*body*/}



                  <div className="min-h-full">



                    {
                      setShowModal && (
                         <div>
                           {
                             login?.students.map((student) => (


                              <div className="px-5 py-3 flex justify-between items-center border-b-2 overflow-x-scroll scrollbar-hide">
                                  <div><Avatar src= {<Image className="h-12 w-12 rounded-full mr-7 object-cover" style={{ width : 32, height : 32}} src={student.profile ? student.profile : "https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpb2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} />}/></div>
                                  
                                  <div className="px-2 flex w-full justify-around">

                                    <div className="font-bold text-lg truncate px-3">{student?.firstname} {student?.lastname}</div>
                                
                                    <div className="font-bold text-lg truncate px-3">{student?.age}</div>

                                  </div>
                                  
                                

                                  <PencilAltIcon className="bg-indigo-500 px-3 py-2 rounded-xl h-12 w-12 hover:bg-yellow-500 hover:text-black text-white font-medium"/>
                             </div>

                             ))
                           }
                         </div>
                      )
                    }

                   { 
                   
                     setShowSubjects &&
                        <div>

                            {
                              login?.subjects.map((subject) => (

                                  <Subjects subject={subject} data={data} key={subject._id}/>


                              ))
                            }

                        </div>
                    }

                    

                    

                      

                    { setShowSubjects && 
                    
                      (
                        <div className="pb-3">
                          <div onClick={() => {setModal(true)}}  className="px-2 py-4  pb-2 rounded-full cursor-pointer mb-3 fixed p-14  space-y-2 text-align group">
                              <div className="invisible group-hover:visible  "><h1 className="text-sm text-gray-500 font-md">add</h1></div>
                              <div className="rounded-full px-3 py-3 bg-green-500"><PlusIcon className="hover:animate-spin h-6 w-6"/></div>
                          </div>
                        </div>

                      )
                    }

                  
                        { 
                          modal && (
                               <AddSubject modal={modal} data={data} setModal={setModal} login={login}/>

                          )
                          
                          
                        }
                     



                 </div>

                  
                   
              
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={setShowModal ? () => setShowModal(false) : () => setShowSubjects(false)}
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
