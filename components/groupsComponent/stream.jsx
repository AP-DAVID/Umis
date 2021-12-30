import { BookOpenIcon, ChevronDoubleRightIcon, MenuIcon, UserCircleIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react";
// import Quill from "./Quill"
import Loader from "../Loader"
import { useRouter } from 'next/router'
import axios from "axios";
import Slate from "./Slate";


import dynamic from "next/dynamic";

const Quill = dynamic(
  () => {
    return import("./Quill");
  },
  { ssr: false }
);



function Stream({data, login}) {

    const [lock, setLock] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const router = useRouter();



    


    const [form, setForm] = useState({
       
        text : '', ///setValue
        groupId : '',
        sectionId : '',
        picture : '',
        firstname : '',
        lastname : '',
        image : ''

    })




    
    

    const handleClick = (value) => {
            setForm({
                ...form,
                text : value
            })
    }


    const handleSubmit = async() => {


        


          if(form.text != ''){

            setOpen(true)
            setForm(form.groupId = data?._id);
            setForm(form.sectionId = login?._id);
            setForm(form.firstname = login.firstname);
            setForm(form.lastname = login?.lastname);
            setForm(form.image = login?.profile);
          


            console.log(form);
     
            const config = {
                headers: {
                    "Accept" : "application/json",
                    'Content-type' : "application/json"
                }
            }
            

            try{
                
                const response = await axios.post('/api/question', JSON.stringify(form) , config)

                router.replace(router.asPath);
                setLock(!lock);
                setOpen(false)


            }catch(error){
                console.log(error)
                setOpen(false)
                // broo something wen wrong here
                

            }

        }
        else {
            console.log("you've haven;t entered anything bruv");
        
        }

    }





    // const handleChange =(e) => {
        
    //     setForm({
    //         ...form,
    //         [e.target.name] : e.target.value
    //     })
    // }

    

    // console.log(data)
    return (
        <div className="flex px-2 space-y-4 flex-col items-center py-5">

            <Loader open={open} setOpen ={setOpen}/>
            
            <div style={{backgroundSize : "cover", backgroundImage: `${ data?.picture ? `url("${data?.picture}")` : 'url("https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'}`}} className="px-5 py-5 h-44 sm:h-56 w-full sm:w-3/4 flex flex-col justify-end bg-gray-700 rounded-lg shadow-md ">

                <div className="flex flex-col space-y-2 text-white">
                    <h1 className="text-4xl text-white font-medium"> {data?.subject[0]?.subjectname} </h1>
                    <h1 className="text-2xl text-white"> {data?.teacher[0]?.firstname} {data?.teacher[0]?.lastname}</h1>
                </div>

            </div>


            

           
           <div className="w-full flex-col space-y-5 sm:w-3/4">

             
               { !lock && (

                   <div onClick={() => setLock(!lock)} className="flex px-4 py-4 space-x-4 cursor-pointer items-center shadow-lg border-t-2 rounded-lg group">
                        <div><UserCircleIcon className="h-10 w-10 text-purple-500"/></div>
                        <div className="font-light group-hover:font-medium group-hover:text-purple-500"><h1>Announce Something to the class</h1></div>
                   </div> 

                    )
               }  


               {lock && (

                 <div>
                   <Quill handleChange={handleClick} value={form.text} />
                        
                    

                   

                   <div className="flex py-2 px-2 justify-between items-center">
                       <XIcon onClick={() => setLock(!lock)} className="h-9 hover:text-red-500 w-8 text-blue-500"/>

                       <ChevronDoubleRightIcon onClick={handleSubmit} className="h-10 w-10 hover:text-red-500 text-blue-500" />
                   </div>
                   
                 </div>
                 
                 

                  )
               }

              { 
                  data.text.length === 0 ? (

                  
                    <div className="px-4 border rounded-lg py-4 ">
                        <div className="text-2xl"> View class updates and connect with class here</div>

                        <div className="flex space-x-3 text-gray-600 items-center">
                            <BookOpenIcon className="h-9 w-9"/>
                            <h1>See when new assignments are posted</h1>
                        </div>

                    </div>
                  ):

                
                    data?.text.map((t) => (
                            
                        <Slate key={t._id} section={t.sectionId} comment={t.comments} login={login} profile={t.image} name={`${t.firstname}-${t.lastname}`} text={t.text} data={t._id}/>

                    ))         
                
                
            }
               

           </div>
            

        </div>
    )
}

export default Stream
