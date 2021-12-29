
import StudentCard from "./StudentCard";


function List({setModal, login, data, text1, text2}) {

    

    
  

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
                   Your Students
                </h3>
                
              </div>
              {/*body*/}



                  <div className="min-h-full">



                    
                         <div>
                           {
                             data.students.map((student) => (

                              <div>
                                  <StudentCard text1 = {text1} text2 = {text2} student={student}/>

                                 
                               </div>

                             ))
                           }
                         </div>
                    

                  

                 </div>

                  
                   
              
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setModal(false)}
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
