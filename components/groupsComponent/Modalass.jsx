import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loader from "../Loader";
import { InputNumber } from 'antd';

import ConfirmModal from "../Scriptss/ConfirmModal"
import dynamic from "next/dynamic";
import {signIn, signOut, useSession} from "next-auth/client";
import { useRouter } from 'next/router'

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const buttonList = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

let CustomEditor;
if (typeof window !== "undefined") {
CustomEditor = dynamic(() => import('../Scriptss/constant'));
}




function Modalass({setOpenModal, data, openModal}) {

    const [open, setOpen] = useState(false)
    const[session, loading] = useSession();
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [dataa, setDataa] = useState("");
    const router = useRouter();


  



  const [form, setForm] = useState(
      {
        title: '', 
        body: '',
        groupId : '',
        totalmark : ''

     
    }
  )

  const onChange = (value) => {
    setForm({
       ...form,
       totalmark : value
     });
   }

  const handleSubmit = async() => {
     
    if(form.title != '' && dataa != '' && form.totalmark !=''){

      setOpen(true)
      await setForm(form.groupId = data?._id);
      await setForm(form.body = dataa)

      const config = {
        headers: {
            "Accept" : "application/json",
            'Content-type' : "application/json"
        }
    }


      try{

        const response = await axios.post('/api/assign', form, config);
        
        await setShowModal(true)
        await router.replace(router.asPath);
        await setOpen(false) 
        await setOpenModal(false)
        

      }catch(error){
        setOpen(false);
        console.log(error);
        setMessage("Something went wrong");
      }
         
          

    }else {
      setMessage("You need to fill up all credentials")
    }
 

  }

  
  const editor = useRef();

    
  const getSunEditorInstance = (sunEditor) => {
      editor.current = sunEditor;
  };

const handleChange =(e) => {
  setForm({
      ...form,
      [e.target.name] : e.target.value
  })
}





    return (
        <div>
             <div
          className="justify-center h-screen py-2 w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Create Assignment
                </h3>
                
              </div>
              {/*body*/}

                
                  
                  

            
                    

                  <form onSubmit={handleSubmit} className="px-4 py-2">
                                <h1 className="mb-4 text-center font-normal text-red-400">{message}</h1>

                                <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossorigin="anonymous" />

                               
                                <div className=" items-center space-y-2">
                                  <label> 
                                      <h1 className="text-lg font-medium">Total Mark</h1>
                                  </label>
                                  <InputNumber value={form.totalmark} name="totalmark" onChange={onChange} type="number" className=" px-2 h-10 border-2 border-blue-500  rounded-md" min={0} max={100} defaultValue="totalmark"  />
                                
                               </div>




                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                    <input 
                                        value={form.title || ''}
                                        name= 'title'
                                        maxLength="100"
                                        onChange={handleChange} 
                                        type="text" className="border-2 text-black border-gray-300 p-2 w-full" name="title" id="title" required />
                                </div>

                               

                                <div className="mb-8">
                                    <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br />
                                  

                                <SunEditor 
                                    value={form.body || ''}
                                    name = "body"
                                    width="100%"
                                    setDefaultStyle="font-family: arial; font-size: 20px;"
                                    setAllPlugins={true} 
                                    onChange={(content) => {
                                        setDataa(content)
                                      }}
                                    setOptions={{
                                        height: 200,
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize', 'formatBlock'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                            ['fontColor', 'hiliteColor', 'textStyle'],
                                            ['removeFormat'],
                                            '/', // Line break
                                            ['outdent', 'indent'],
                                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                                            ['table', 'link'  /** audio ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                                            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                                            ['fullScreen', 'showBlocks', 'codeView'],
                                            ['preview', 'print'],
                                            ['save', 'template']
                                        ]
                                    }}
                                    getSunEditorInstance={getSunEditorInstance}

                                
                                />

                                
                               

                               

                                {showModal && <ConfirmModal text1="Assignment has been submitted " setShowModa = {setShowModal}/>}


                                    


                                </div>

                            
                            </form>

                


                  <Loader open={open} setOpen={setOpen} />
                   
              
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setOpenModal(false)}
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

export default Modalass
