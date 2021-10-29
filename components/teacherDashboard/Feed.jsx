import { HandIcon } from "@heroicons/react/outline"
import Barchart from "./Barchart"
import dynamic from 'next/dynamic'

const PieC = dynamic(() => import("./Shared/PieC"),  { ssr: false })

const Funnel = dynamic(() => import("./Shared/Funnel"),  { ssr: false })




function Feed() {
    return (
        <div className="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll scrollbar-hide h-screen">

            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, Admin!</h1>
              </div>

                <h1 className="text-4xl font-bold">Your Dashboard!</h1>

                
            </div>

            
            
            <Barchart />

            <div className="sm:px-3 md:pr-6 py-3 mb-14 flex mt-12  flex-col justify-around  w-full sm:flex-row">
                <div className=" h-64 bg-yellow-100  mb-5 px-2 py-2 rounded-xl sm:w-2/6">
                  <PieC />
                </div>

                <div className=" h-64 bg-yellow-100 mb-5 px-2 py-2 rounded-xl sm:w-2/6">
                  <Funnel />
                </div>

                {/* <div className="flex flex-col h-64 sm:w-1/4">
                    <div className="h-2/5 w-full px-2 py-2 rounded-xl">
                      <Donut />
                    </div>

                    <div className="h-1/5"/>

                    <div className="h-2/5 w-full px-2 py-2  rounded-xl">
                      and here
                    </div>
                </div> */}
            </div>

            
            
        </div>
    )
}

export default Feed
