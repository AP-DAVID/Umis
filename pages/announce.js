import { PlusIcon, UserCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { getSession } from "next-auth/client"
import Nav from "../components/Navbar"
import { useEffect, useState } from 'react'
import Scriptt from '../components/Scriptss/Scriptt'
import Card from '../components/Scriptss/Card'
import axios from 'axios'
import { getData } from './api/getScript/index'



function Index({session, joke}) {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(joke);


    

    useEffect(async() => {

        if(session){

  
          try{
           
           if(session?.user?.section === "admin"){
               const response = await axios.get(`/api/getScript/${session?.user?._id}` );
  
               setData(response.data)
           }
      
          }catch(error){
            console.log(error)
          }
  
        }else {
          return
        }
      }, [session])

    

    return (

        <div className='h-screen bg-gray-700 overflow-y-scroll scrollable'>

          {/* Navbar */}

          <div className=" bg-gray-700 items-center flex px-7 justify-between">
                           <div>

                              <h1 className="text-2xl font-black py-5  text-white font-bold mt-28 px-6 md:px-12">
                                   Scripts
                               </h1>
                           </div>
                            <div>
                                {
                                    session?.user?.profile ? (
                                        <img src={session?.user?.profile} className="h-8 w-8 rounded-full object-cover"/>
                                    ): (

                                        <UserCircleIcon className="h-8 w-8 text-blue-500" />
                                    )
                                }
                                
                            </div>
            </div>

        {  

           session.user && showModal === false ? (
            
            <div className="h-screen overflow-y-scroll scrollable bg-gray-700">

                   


                    {/* Body get bloggsss */}

             <div className="sm:px-7  ml-16 sm:ml-1 mr-4 sm:mr-0 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
               
                {
            
                     data?.map((content) => 
                    (
                 
                        <Card key={content._id} userId={content.userId} profile ={content.profile} image={content.image} lastname={content.lastname} username={content.firstname} position={content.section} text={content.firstname} id={content._id} title={content.title}  body={content.desc} date={content.createdAt} />
                     
                   
                       )
                   )
                }

                </div>




              <div onClick={() => setShowModal(true)}  className="px-2 py-4 rounded-full cursor-pointer fixed p-14 bottom-8 right-3 sm:right-80 origin-bottom-right space-y-2 text-align group">
                  
                  <div className="invisible group-hover:visible  "><h1 className="text-sm text-white font-md">add</h1></div>
                  <div className="rounded-full px-3 py-3 bg-blue-500"><PlusIcon className="hover:animate-spin h-10 w-10"/></div>

                </div>

                

           

            
            
          </div>
           ): 
            
               session.user && showModal === true ? (
                      
                    
                   <Scriptt showModa={showModal} setShowModa ={setShowModal}/>
               ):
            (
                <div className="justify-center flex">
                    <h1 className="text-xl font-extrabold "> You need to login </h1>
                </div>
            )
        }


        </div>
    )
}

export default Index

export async function getServerSideProps(ctx){

  const sess = await getSession(ctx)
  
  const res = await getData(sess?.user?.adminId);
  const joke = await JSON.parse(JSON.stringify(res))

    return {
      props:{
        session: sess,
        joke : joke
      }
    }
  }



