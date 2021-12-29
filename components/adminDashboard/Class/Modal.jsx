import { useState } from "react"
import {useRouter} from "next/router"
import Loader from "../../Loader";
import axios from 'axios';



function Modal({setShowModal, login}) {
 

  const router = useRouter();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(
    {

      adminId : "",
      classname : "",
    
    }
  )


  const handleChange =(e) => {
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
  }


  const handleSubmit = async() => {

    setOpen(true)

    setForm(form.adminId = login._id);

    const config = {
      headers: {
          "Accept" : "application/json",
          'Content-type' : "application/json"
      }
    }


    try{
      const response = await axios.post(`/api/class`, form, config)
      console.log(response)
      router.replace(router.asPath);
      setShowModal(false)

    }catch(error){
        console.log(error)
        setOpen(false)
    }

  }


    return (
        <div>
             <div
          className="justify-center h-screen w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full px-2">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Create Class
                </h3>
                
              </div>
              {/*body*/}

                  <img src={ "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"} className="ml-2 mt-2  h-20 w-20 object-cover rounded-full cursor-pointer"/>

                  <div className="flex justify-center">
                        <h1 className="font-medium text-red-500 text-center p-4 text-base">{message}</h1>
                  </div>

                  <form className="h-full w-full space-y-2 ml-6 sm:px-5 my-10 sm:mr:10 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                    <div >
                        <h4 className="text-base text-gray-500">Class Name</h4>

                        <input type="text" name="classname" value={form.classname} onChange={handleChange} placeholder="type in the className here"  className="h-16 w-54 text-indigo-500 font-bold  rounded-full px-3 bg-gray-200 shadow-md " />
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
                  className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Create
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
