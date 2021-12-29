
import { UserCircleIcon, PencilAltIcon } from "@heroicons/react/outline"
import { Select } from 'antd';
import { useState } from 'react';
import { InputNumber } from 'antd';
import Loader from "../../Loader";
import { useRouter } from "next/router";
import axios from 'axios';
const { Option } = Select;

function Grade({setOpenModal, text1, text2, login, data}) {
     
     const [message, setMessage] = useState()
     const [open, setOpen] = useState(false);
     const router = useRouter();
     const [form, setForm] = useState(
       {

          studentId : '', //data?._id
          grade : '',
          score : 1,
          term : '',
          subjectname : '', // 
          classname : '',
          adminId : ''

       }
     )

   

     const handleChange =(value) => {
      setForm({
          ...form,
          term : value
      })
    }

    
    const handle =(value) => {
      setForm({
          ...form,
          grade : value
      })
    }

    const onChange = (value) => {
     setForm({
        ...form,
        score : value
      });
    }


    const handleSubmit = async() => {

      if(form.grade != '' && form.term != '' && form.score >= 0 && form.score <= 100){
             
           setOpen(true);

           await setForm(form.studentId = data?._id);
           await setForm(form.subjectname = text1);
           await setForm(form.classname = text2);
           await setForm(form.adminId = data?.adminId);
           
           const config = {
            headers: {
                "Accept" : "application/json",
                'Content-type' : "application/json"
            }
          }

          try{

            const response = await axios.post('/api/result', form, config);

            if(response){
              router.replace(router.asPath);
              setOpen(false)
              setOpenModal(false)
            }else{
              setMessage("Unable to set Grade at this time")
              setOpen(false)
            }

          }catch(error){
            console.log(error)
            setOpen(false);
            setMessage("Poor Internet")
          }

           
      }else{
          
          setMessage("Invalid Credentials")
      }

    }


    
  

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
                   Enter {text1} Grade of {data.lastname} - {data.firstname}
                </h3>
                
              </div>
              {/*body*/}

                 <div className="flex justify-center">
                    <h1 className="font-medium text-red-500 text-center p-4 text-base">{message}</h1>
                  </div>


                  <div className="min-h-full space-y-14">

                        <form className="flex items-center flex-col lg:flex-row justify-evenly py-14 ">

                            <div className=" items-center space-y-2">
                                <label> 
                                    <h1 className="text-lg font-medium">Enter Score</h1>
                                </label>
                                <InputNumber value={form.score} name="score" onChange={onChange} type="number" className=" px-2 h-10 border-2 border-blue-500  rounded-md" min={0} max={100} defaultValue="score"  />
                                
                             </div>

                             <div className=" items-center space-y-2">
                                <label> 
                                    <h1 className="text-lg font-medium">Enter term</h1>
                                </label>
                                <Select onChange={handleChange} value={form.term} name ="term"  style={{ width: '100%' }} defaultValue="First">
                                    <Option value="First">First</Option>
                                    <Option value="Second">Second</Option>
                                    <Option value="Third">Third</Option>
                                </Select>
                             </div>

                             <div className=" items-center space-y-2">
                                <label> 
                                    <h1 className="text-lg font-medium">Enter Grade</h1>
                                </label>
                                <Select value={form.grade} onChange={handle}  name="grade" style={{ width: '100%' }} defaultValue="E">
                                    <Option value="A">A</Option>
                                    <Option value="B">B</Option>
                                    <Option value="C">C</Option>
                                    <Option value="D">D</Option>
                                    <Option value="E">E</Option>
                                    <Option value="F">F</Option>

                                </Select>
                             </div>
                            
                        </form>

                        <Loader open={open} setOpen={setOpen} />
                  </div>

                  
                   
              
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
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSubmit}
                >
                  Enter
                </button>
              
              </div>
            </div>

            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default Grade
