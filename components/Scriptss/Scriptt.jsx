
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Loader from '../Loader';

import axios from 'axios';
import dynamic from "next/dynamic";
import {signIn, signOut, useSession} from "next-auth/client";
import ConfirmModal from "./ConfirmModal";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });

  const buttonList = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });

let CustomEditor;
if (typeof window !== "undefined") {
  CustomEditor = dynamic(() => import('./constant'));
}



function Scriptt({dataa, showModa, setShowModa }) {

    const[session, loading] = useSession();
    const router = useRouter()
    const url = "https://api.cloudinary.com/v1_1/blytetech/image/upload"
    const preset = "dufgjx3z"
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [open, setOpen] = useState(false)
    const [data, setData] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [form, setForm] = useState(
        {
        lastname : session?.user?.lastname,
        firstname : session?.user?.firstname,
        profile : session?.user?.profile,
        adminId : session?.user?.adminId,
        section : session?.user?.section,
        userId : session?.user?._id,
        title: '', 
        desc: '',
        body: '',
        image : ''
      }
    )
    const [form2, setForm2] = useState(
        {
            file : '',
            upload_preset : 'dufgjx3z'
        }
    )
  




    
    
    useEffect(() => {
        setEditorLoaded(true);
      }, []);



    const handleSubmit= async() =>{
       if(data == "" || form.title == "" || form.desc == ""){
           setMessage("one or more of the Content are empty")
       
       }
       
       else if(form2.file == ""){
         setMessage("Please insert a picture")
        
       }else {
           
            try{

                
                setOpen(true)
                var fd = new FormData();
                fd.append("upload_preset", preset);
                fd.append("file", form2.file);
                const config2 = {
                headers: { "X-Requested-With": "XMLHttpRequest" },
                };


                const res = await axios.post(url, fd, config2)
                
                await setForm(form.image = res.data.secure_url);
                const imageUrl = await res.data.secure_url;
                
                await setForm({...form, image: imageUrl});

            }catch(error){
                setOpen(false)
                setMessage("Invalid image format. use a valid one")
                console.log(error)
            }



            await setForm(form.body = data)
            if(session?.user?.section === "admin"){

                await setForm(form.adminId = session?.user?._id);

            }

            const config = {
                headers: {
                    "Accept" : "application/json",
                    'Content-type' : "application/json"
                }
            }


            try{
                const response = await axios.post('/api/announce', JSON.stringify(form) , config)
                setOpen(false)
                router.replace(router.asPath);
                setShowModal(true)
               
                console.log(response)
                setForm(form.body = "");
                setShowModa(false)
                

        
            }catch(error){
                setOpen(false)
                setMessage("Bad request")
                console.log(error)
            }



       }

    }

    const handleChange =(e) => {

        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const editor = useRef();

    
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };


   
  
  

    return (
        <div className="bg-gray-400 h-screen px-1">

             <Loader open={open} setOpen={setOpen} />
         
            <div className="py-12 text-black bg-gray-400">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 flex flex-col mt-14 bg-white border-b border-gray-200">

                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-4 text-center font-normal text-red-400">{message}</h1>

                                <div className="mb-4">
                                  <label className="text-xl text-gray-600 mb-4 pb-3">Choose Blog Image <span className="text-red-500">*</span></label><br />
                                    {/* <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({ base64 }) => setForm({ ...form, image: base64 })}
                                    /> */}

                                    <input type="file" name = 'image' onChange = {(e) => setForm2({...form2, file: e.target.files[0]})} />
                                </div>

                                
                                <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossorigin="anonymous" />

                               
                             




                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                    <input 
                                        value={form.title || ''}
                                        name= 'title'
                                        maxLength="100"
                                        onChange={handleChange} 
                                        type="text" className="border-2 text-black border-gray-300 p-2 w-full" name="title" id="title" required />
                                </div>

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Description <span className="text-red-500">*</span></label><br />
                                   
                                    <textarea
                                        cols="30"
                                        rows="5"
                                        maxLength="200"
                                        value={form.desc || ''}
                                        name= 'desc'
                                        onChange={handleChange} 
                                        type="text" className="border-2 text-black border-gray-300 p-2 w-full"  id="desc" required />
                                </div>

                               

                                <div className="mb-8">
                                    <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br />
                                    {/* <textarea id="editor" className="border-2 border-gray-500">
                                        
                                    </textarea> */}

                                {/* <Editor
                                        value={form.body || ''}

                                        name= "body"

                                        onChange={(data) => {
                                            setData(data)
                                          }}
                                        className="text-black"
                                        editorLoaded={editorLoaded}
                                />

                                {CustomEditor && <CustomEditor />} */}

                                <SunEditor 
                                    value={form.body || ''}
                                    name = "body"
                                    width="100%"
                                    setDefaultStyle="font-family: arial; font-size: 20px;"
                                    setAllPlugins={true} 
                                    onChange={(content) => {
                                        setData(content)
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
                                            ['table', 'link',  /** audio ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                                            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                                            ['fullScreen', 'showBlocks', 'codeView'],
                                            ['preview', 'print'],
                                            ['save', 'template']
                                        ]
                                    }}
                                    getSunEditorInstance={getSunEditorInstance}

                                
                                />

                                
                               

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">References</label><br />
                                    <input          
                                        value={form.references || ''}
                                        name= 'references'
                                        onChange={handleChange}  type="text" className="border-2 text-black border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)"/>
                                </div>

                                {showModal && <ConfirmModal text1="Script post created " setShowModa = {setShowModal}/>}


                                    


                                </div>

                                <div className="flex p-1 space-x-5">
                                    
                                <button  type="button" onClick={() => setShowModa(false)} className="rounded-xl hover:animate-pulse p-3 bg-blue-500 text-white hover:bg-blue-400" required>Close</button>
                                    <button  type="button" onClick={handleSubmit} className="rounded-xl hover:animate-pulse p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    </div>

    {/* <script src="./node_modules/ckeditor4/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'editor' );
    </script> */}


        </div>
    )
}

export default Scriptt

