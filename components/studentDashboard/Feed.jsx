import { HandIcon } from "@heroicons/react/outline"

import dynamic from 'next/dynamic'

// const PieC = dynamic(() => import("./Shared/PieC"),  { ssr: false })

import  Barchart from './Shared/Barchart'
import Piec from "./Shared/Piec"


function Feed({data, section}) {
    return (
        <div className="flex md:ml-10 flex-col w-full pt-6 overflow-x-hidden  overflow-y-scroll scrollbar-hide h-screen">

            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  {
                    data.username ? (
                      <h1 className="text-md font-medium text-red-400">Hey, {data?.username}!</h1>
                    ) : (
                      <h1 className="text-md font-medium text-red-400">Hey, {section?.username}!</h1>
                    )
                  }

                  
              </div>

                <h1 className="text-4xl font-bold">Your Dashboard!</h1>

                
            </div>

          <div className=" flex justify-center mt-5">
              <div className="w-5/6 mr-3 sm:ml-0 sm:w-4/5 lg:w-4/5">
                 <Barchart />
            </div>
          </div>
            
            
            

            <div className="sm:px-3 md:pr-6 py-3 mb-14 flex mt-12  flex-col justify-center  w-full sm:flex-row">

                <div className=" h-64  mb-5 px-2 py-2 rounded-xl sm:w-2/6">
                  <Piec />
                </div>

              
            </div>
            
            
        </div>
    )
}

export default Feed
