import axios from 'axios'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import {signIn, signOut, useSession} from "next-auth/client";
import Interweave from 'interweave';

import { getData } from '../api/announce/[id]'
import Thumbnail from '../../components/Thumbnail';
import { LightBulbIcon, PencilIcon, UserCircleIcon } from '@heroicons/react/solid'



function blogs({data}) {

    const router = useRouter()

    const [session, loading] = useSession();

    
    const [body, setBody] = useState("")
    const { id } = router.query
    // const {register, isLoading, isError} = getUser(id)

  

    

    


    return (
        <div className="text-black bg-gray-200 h-full w-full">
             <div className=" items-center flex px-7 justify-between">
                           <div>

                              <h1 className="text-2xl text-black  py-5 font-bold mt-28 px-6 md:px-12">
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
            {/* {
            
                data?.map((content) => 
                    (
                        <div key={content._id}>
                            <h1 >{content.title}</h1><br />

                           
                   


                             <Markup content={content.body} />

                        </div>
                    )
                )
            } */}


       <div className="h-screen flex flex-col justify-between">
            <main className="mt-14 flex justify-center lg:px-30">
                 <div className=" flex justify-center w-full h-full">
                     <div className="break-all" style={{width : "720px"}}>
                         <Thumbnail position={data.section} title={data.title} text={data.firstname} body={data.desc} source={data.image} />
                         
                         <div className="sm:ml-7 ml-7 sm:mr-7 break-normal">
                            <Interweave className="mr-3 " tagName="div" content={data.body} />
                            
                        </div>
                     </div>

                 </div>
                 
            </main>

           
           <div>

                <div className =" ml-4 mt-5 font-medium flex flex-col">
                    <div className="flex space-x-2">
                        <h1 >
                        Written by  {data.firstname} {data.lastname}
                        </h1>

                        <PencilIcon  className=" text-center h-5 mx-2"/>
                    </div>
                    <h1 >
                        {data.position}
                    </h1>
                </div>

                
            </div>

         </div>
            
        </div>
    )
}





export async function getServerSideProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await getData(params.id);
    const data = await JSON.parse(JSON.stringify(res))
  
    // Pass post data to the page via props
    return { props: { data } }
  }





  
  

export default blogs



