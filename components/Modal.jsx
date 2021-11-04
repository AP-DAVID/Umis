import React, { useState } from "react";
import { PaystackButton } from "react-paystack"
import {UserCircleIcon, EyeOffIcon, EyeIcon} from '@heroicons/react/outline'
import generator from "generate-password";
import generateUsername from "generate-username-from-email"
import Router from "next/router";

export default function Modal({showModal, setShowModal, amount}) {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const publicKey = "pk_test_1e46b9ec75c413203c1df941c528a7e69c0d8745"



    let password = generator.generate({
      length: 10,
      numbers: true
    });

   let username = generateUsername(email)
    
    

    const componentProps = {
        email,
        amount,
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => {
           alert(`Thanks for doing business with us! Come back soon!!.. your username is ${username} and your password : ${password}`)
           Router.push("/admin/login")
        },
         
        onClose: () => alert("Wait! Don't leave :("),
    }
 
  return (
    <>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-medium pl-16 font-semibold">
                    Make Payment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                    </button>
                </div>
                {/*body*/}

              
              <form className="px-7 py-7 space-y-7">

                <div className="flex">
                  <input type="text" placeholder="Name"  
                      className="px-5 h-14 w-4/5 sm:w-72 placeholder-gray-400 text-white rounded-tl-lg rounded-bl-lg bg-gray-700"
                      required
                      onChange={(e) => setName(e.target.value)}
                   
                   />
                  <div className="h-14 cursor-pointer w-10 px-1 items-center flex flex-col justify-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg">
                    <UserCircleIcon className="text-red-400"/>
                  </div>
                </div>


                <div className="flex">
                  <input type="email" placeholder="Email"  
                      className="px-5 h-14 w-4/5 sm:w-72 placeholder-gray-400 text-white rounded-tl-lg rounded-bl-lg bg-gray-700"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                   
                   />
                  <div className="h-14 cursor-pointer w-10 px-1 items-center flex flex-col justify-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg">
                    <UserCircleIcon className="text-red-400"/>
                  </div>
                </div>


                <div className="flex">
                  <input type="number" placeholder="Phonenumber"  
                      className="px-5 h-14 w-4/5 sm:w-72 placeholder-gray-400 text-white rounded-tl-lg rounded-bl-lg bg-gray-700"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                   
                   />
                  <div className="h-14 cursor-pointer w-10 px-1 items-center flex flex-col justify-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg">
                    <UserCircleIcon className="text-red-400"/>
                  </div>
                </div>

               </form>


               

               




                
                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                  <PaystackButton {...componentProps} className="px-4 py-3 text-white text-center uppercase font-semibold rounded-2xl bg-indigo-700 hover:bg-indigo-900 block w-full"  />
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
