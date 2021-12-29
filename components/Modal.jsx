import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack"
import {UserCircleIcon, EyeOffIcon, EyeIcon} from '@heroicons/react/outline'
import generator from "generate-password";
import generateUsername from "generate-username-from-email"
import Router from "next/router";
import { send } from 'emailjs-com';
import Wait from "./shared/wait";
import axios from "axios"

export default function Modal({showModal, setShowModal, amount}) {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [userLog, setUser] = useState("")
    const [phone, setPhone] = useState("")
    const [passwordLog, setPassword] = useState("")
    const [showWait, setShowWait] =  useState(false);


    const [form, setForm] = useState(
      {
      email : "",
      username: '', 
      password: '',
      payment: ""
    }
   )

    const publicKey = "pk_test_1e46b9ec75c413203c1df941c528a7e69c0d8745"

    useEffect(async() => {

        let password = await generator.generate({
          length: 10,
          numbers: true
        });

        let username =  await generateUsername(email)
    
      await setUser(username)
      await setPassword(password)

   
      console.log(password)
    }, [email])



    const onSubmit = async() => {

        setForm(form.username = userLog);
        setForm(form.password = passwordLog);
        setForm(form.email = email);

        if(amount === 8000000) {
          setForm(form.payment = "freelancer");
        }

        else if(amount === 25000000){
          setForm(form.payment = "agency");
        }

        else{
          setForm(form.payment = "enterprise");
        }

        const config = {
          headers: {
              "Accept" : "application/json",
              'Content-type' : "application/json"
          }
        }

        try{

          const response = await axios.post("/api/admin", JSON.stringify(form) , config);

          console.log(response);

        }catch(error){

          console.log(error)

        }
        

    }

    
    const [toSend, setToSend] = useState({
      from_name: 'Umis',
      to_name: "",
      to_email : "",
      message: "",
      reply_to: "blytetech@gmail.com",
    });

    


    const sendEmail = async() => {

     onSubmit();

     await setToSend(toSend.to_email = email);
     await setToSend(toSend.to_name = name)
     await setToSend(toSend.message = `Your username is : ${userLog} and your password is : ${passwordLog}, you can log in to your admin panel with the credentials`)

    
      await send(
        'service_e620qji',
        'template_dvsxd48',
        toSend,
        'user_s4IlFhgjRNiaSPUMgomRf'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          Router.push("/admin")
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });


        console.log("sentttt")
    };



  
    
    

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
           alert(`We have sent the username and password for your admin login to your email address`);
           setShowWait(true)
         
           
          sendEmail();

        },
         
        onClose: () => alert("Wait! Don't leave :("),
    }
 
  return (
    <>
     
      {showModal ? (
        <>
          <div
            className="justify-center text-white items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative text-white flex flex-col w-full bg-purple-500 outline-none focus:outline-none">
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


               

               {
                 showWait && (
                    <Wait showWait = {showWait}/>
                 )
               }




                
                
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
