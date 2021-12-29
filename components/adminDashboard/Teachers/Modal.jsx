import { useEffect, useState } from "react";
import { Image } from 'semantic-ui-react'
import axios from "axios";
import {useRouter} from "next/router"
import generator from "generate-password";
import generateUsername from "generate-username-from-email"
import { send } from 'emailjs-com';
import Loader from "../../Loader";




function Modal({setShowModal, showModal, login}) {

  const url = "https://api.cloudinary.com/v1_1/blytetech/image/upload"
  const preset = "dufgjx3z"
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [imagee, setImagee] = useState("");
  const router = useRouter()
  const [open, setOpen] = useState(false);
 

  const [toSend, setToSend] = useState({
    from_name: 'Admin',
    to_name: "",
    to_email : "",
    message: "",
    reply_to: login?.email,
  });

  console.log(login.payment)



  const [form, setForm] = useState(
      {
      username : "",
      email : "",
      state : "",
      country : "",
      contact : "",
      adminId : "",
      profile : "",
      payment : "",
      firstname : "",
      lastname : "",
      password : "",
      age : 0,
      
    }
  )




const setCredentials = async() => {
      let password = await generator.generate({
        length: 10,
        numbers: true
      });

      let username =  await generateUsername(form.email)

    await setForm(form.username = username)
    await setForm(form.password = password)


    console.log(password)
    console.log(username)
}





const handleChange =(e) => {
  setForm({
      ...form,
      [e.target.name] : e.target.value
  })
}

const sendEmail = async() => {

  await setToSend(toSend.to_email = form.email);
  await setToSend(toSend.to_name = form.firstname)
  await setToSend(toSend.message = `Your username is : ${form.username} and your password is : ${form.password}, you can log in to your student's panel with the credentials`)

   
   await send(
     'service_e620qji',
     'template_xt76q0l',
     toSend,
     'user_s4IlFhgjRNiaSPUMgomRf'
   )
     .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
      //  Router.push("/admin")
     })
     .catch((err) => {
       console.log('FAILED...', err);
     });


     console.log("sentttt")

}


const handleSubmit = async() => {

 if(form.email != "" || form.lastname != "" || form.firstname != "" || form.age != 0){


     try{
       
      setOpen(true)
      setCredentials();
        
      var fd = new FormData();
      fd.append("upload_preset", preset);
      fd.append("file", imagee);
      const config2 = {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      };


      const res = await axios.post(url, fd, config2)
                
      await setForm(form.profile = res.data.secure_url);

      await setForm(form.payment = login.payment);

      await setForm(form.adminId = login._id);
      


      const config = {
        headers: {
            "Accept" : "application/json",
            'Content-type' : "application/json"
        }
      }
    

        try{
          const response = await axios.post(`/api/admin/teacher`, form, config)
          console.log(response)
          await sendEmail();
          router.replace(router.asPath);
          setShowModal(false)

          

        
          
        }catch(error){
            console.log(error)
            setOpen(false)
            setMessage("Something went wrong")
        }

    }catch(error){
      console.log(error);
      setOpen(false)
      setMessage("Something went wrong")

    }

 }
  else {
    setMessage("One or more of the content is empty");
  }

}




    return (
        <div>
             <div
          className="justify-center h-screen w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Create Teacher
                </h3>
                
              </div>
              {/*body*/}

                 <div>

                     <Image className="object-contain py-5 px-3 rounded-full max-h-32" src={image ? image :  'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'} bordered size='small' />
                        
                        
                        <label
                            className="w-36 ml-3 flex flex-col items-center  bg-gray-600 rounded-xl shadow-md  uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white text-black ease-linear transition-all duration-150">
                            {/* <i className="fas fa-cloud-upload-alt fa-3x" /> */}
                            <span className="mt-2 text-sm leading-normal text-white">Select a profile pic</span>
                            <input type='file' name='image'
                            
                            onChange = {(e) => {
                              setImagee(event.target.files[0]);
                              setImage(URL.createObjectURL(event.target.files[0]))//to show the picture on the browser
                            }} className="invisible" />
                        </label>


                  </div>

                  <div className="flex justify-center">
                    <h1 className="font-medium text-red-500 text-center p-4 text-base">{message}</h1>
                  </div>
                  
                  <form className="h-full w-full space-y-2 ml-6 sm:px-5 my-10 sm:mr:10 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                    <div >
                        <h4 className="text-base text-gray-500">Username</h4>

                        <input type="text" value = {form.username} onChange={handleChange} name= 'username'  className="h-16 w-54 text-indigo-500 font-bold  rounded-full px-3 bg-gray-200 shadow-md " />
                    </div>

                    <div >
                        <h4 className="text-base text-gray-500">First name</h4>

                        <input type="text" value = {form.firstname} onChange={handleChange} name= 'firstname'   className="h-16 w-54 text-indigo-500 font-bold  rounded-full px-3 bg-gray-200 shadow-md " />
                    </div>

                    <div >
                        <h4 className="text-base text-gray-500">Lastname</h4>

                        <input type="text" value = {form.lastname} onChange={handleChange} name= 'lastname'  className="h-16 w-54 text-indigo-500 font-bold  rounded-full px-3 bg-gray-200 shadow-md " />
                    </div>

                    <div>
                        <h4 className="text-base text-gray-500">Contact</h4>

                        <input type="number" value = {form.contact} onChange={handleChange} name= 'contact' className="h-16 px-3 text-indigo-500 font-bold  bg-gray-200 shadow-md  w-54 rounded-full " />
                    </div>


                    <div>
                        <h4 className="text-base text-gray-500">Email</h4>

                        <input type="email" value = {form.email} onChange={handleChange} name= 'email' className="h-16 px-3 text-indigo-500 font-bold bg-gray-200 shadow-md  w-54 rounded-full " />
                    </div>

                    <div>
                        <h4 className="text-base text-gray-500">Age</h4>

                        <input type="text" value = {form.age} onChange={handleChange} name= 'age' className="h-16 px-3 text-indigo-500 font-bold bg-gray-200 shadow-md  w-54 rounded-full " />
                    </div>

                    <div>
                        <h4 className="text-base text-gray-500">State</h4>

                        <input type="text" value = {form.state} onChange={handleChange} name= 'state' className="h-16 px-3 text-indigo-500 font-bold bg-gray-200 shadow-md  w-54 rounded-full " />
                    </div>

                    <div>
                        <h4 className="text-base text-gray-500">Country</h4>

                        <input type="text" value = {form.country} onChange={handleChange} name= 'country' className="h-16 px-3 text-indigo-500 font-bold bg-gray-200 shadow-md  w-54 rounded-full "/>
                    </div>

                   

                  




                  </form>
                   
                  <Loader open={open} setOpen={setOpen} />
              
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  className="shadow-lg text-white bg-indigo-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Create Teacher
                </button>
              </div>
            </div>

            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default Modal
