import { HandIcon } from "@heroicons/react/outline"
import Barchart from "./Barchart"
import dynamic from 'next/dynamic'

const PieC = dynamic(() => import("./Shared/PieC"),  { ssr: false })


function Feed() {
    return (
        <div className="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll scrollbar-hide h-screen">

            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, Skills!</h1>
              </div>

                <h1 className="text-4xl font-bold">You've got some Points!</h1>

                
            </div>

            
            
            <Barchart />

            <div className="sm:px-3 md:pr-6 py-3 mb-14 flex mt-12  flex-col justify-center  w-full sm:flex-row">

                <div className=" h-64 bg-green-100  mb-5 px-2 py-2 rounded-xl sm:w-2/6">
                  <PieC />
                </div>

              
            </div>
            
            
        </div>
    )
}

export default Feed
