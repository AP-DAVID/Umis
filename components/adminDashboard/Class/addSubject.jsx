import { useState } from "react";
import { Image } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import Loader from "../../Loader";
import { HandIcon, PlusIcon } from "@heroicons/react/outline"
import axios from "axios"
import {useRouter} from "next/router";


function AddSubject({modal, data, setModal, login, login2}) {
    
    const url = "https://api.cloudinary.com/v1_1/blytetech/image/upload"
    const router = useRouter();
    const preset = "dufgjx3z"
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const [imagee, setImagee] = useState("");

    const [form, setForm] = useState(
        {
            subjectname : '',
            classId : '',
            picture : '',
            teacher : '',
            adminId : ''
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

        if(imagee != ""){


           try{

            var fd = new FormData();
            fd.append("upload_preset", preset);
            fd.append("file", imagee);
            const config2 = {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            };


            const res = await axios.post(url, fd, config2)
                        
            await setForm(form.picture = res.data.secure_url);

          }catch(error){
              console.log(error);
              setOpen(false)
          }
        }

        await setForm(form.classId = login._id)
        await setForm(form.adminId = data?._id)


        const config = {
            headers: {
                "Accept" : "application/json",
                'Content-type' : "application/json"
            }
        }


        try{
          
          const response = await axios.post("/api/class/subject", form, config);
          console.log(response);

          router.replace(router.asPath);
          setModal(false);




        }catch(error){
            console.log(error)
            setOpen(false)
            setMessage("something went wrong")
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
                       Add Subjects
                    </h3>
                    
                </div>
                {/*body*/}



                    <div className="min-h-full">

                            <div>

                                    <Image className="object-contain py-5 px-3 rounded-full max-h-32" src={image ? image :  'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} bordered size='small' />
                                    
                                    
                                    <label
                                        className="w-36 ml-3 flex flex-col items-center  bg-gray-600 rounded-xl shadow-md  uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white text-black ease-linear transition-all duration-150">
                                        {/* <i className="fas fa-cloud-upload-alt fa-3x" /> */}
                                        <span className="mt-2 text-sm leading-normal px-2 text-white">Select a Subject Picture</span>
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
                                    <h4 className="text-base text-gray-500">Subject name</h4>

                                    <input type="text"  name= 'subjectname' value={form.subjectname} onChange={handleChange}  className="h-16 w-54 text-indigo-500 font-bold  rounded-full px-3 bg-gray-200 shadow-md " />
                                </div>


                                <div>
                                   <h4 className="text-base text-gray-500">Class</h4>

                                   <div>
                                          <Input readonly="readonly" size="massive" transparent={false} list='teachers' placeholder='Choose a teacher...'  name="teacher" value={form.teacher} onChange={handleChange}/>
                                          <datalist id="teachers">
                                                {
                                                  data?.teachers?.map((res)=> (
                                                    <option value={`${res.firstname}`}>
                                                     Teachers
                                                     
                                                    </option>
                                                  ))
                                                }
                                                <HandIcon className="h-5 w-5"/>
                                          </datalist>

                                    </div>
                                            
                                      
                                </div>




                            </form>

                            <Loader open={open} setOpen={setOpen} />


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

export default AddSubject
