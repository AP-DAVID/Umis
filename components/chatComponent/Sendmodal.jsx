// import Image from "next/image"

import { Image } from 'semantic-ui-react'
import { useState } from "react";
import axios from "axios";



function Sendmodal({setShowModal, image}) {


    const url = "https://api.cloudinary.com/v1_1/blytetech/image/upload"
    const preset = "dufgjx3z"

    const [imagee, setImagee] = useState("");
    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState("");

    

    const handleChange =(e) => {
        setMessage("");
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }



    return (
        <>
        <div
          className="justify-center h-screen w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative sm:w-2/3 my-auto mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
               
         


                
              </div>
              {/*body*/}

                 

                    <div>
                     

                      <div className="flex items-center space-x-5">

                          <div className="flex flex-col space-y-4 align-middle text-center">
                            {image && (<Image className="object-contain w-96 rounded-xl max-h-52" src={image } bordered size='large' />)}
                            
                        </div>


                        <div>
                            <h1 className="text-base font-mono font-bold">Your Chosen Image</h1>
                        </div>
                      </div>

                        
                     
                  

               
                   
              
              {/*footer*/}
              <div className="flex w-full items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                
                

               



                <div className="flex items-center space-x-2">

                    <button
                    className="text-red-500 h-11 bg-gray-200 rounded-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                    </button>
                    
                    {/* tweet button */}
                    <button type="button"  className="shadow-lg bg-white text-red-500 flex items-center active:bg-emerald-600 font-bold uppercase text-sm px-3 py-3 sm:px-6 sm:py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        <div> <h1 className="text-blue-500 text-sm">Send</h1> </div>
                        <div> 
                                
                        </div>

                    </button>




                </div>
            
              </div>

            


           </div>


            </div>

            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
}



export default Sendmodal