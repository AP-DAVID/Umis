import { HandIcon } from "@heroicons/react/outline"
import Barchart from "./Shared/Barchart"
import Chart from "./Shared/Chart"
import dynamic from 'next/dynamic'




function Feed({login}) {
    return (
        <div className="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll overflow-x-hidden scrollbar-hide h-screen">

            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, {login.username}!</h1>
              </div>

                <h1 className="text-4xl font-bold">Your Dashboard!</h1>

                
            </div>

            <div className="flex mt-7 lg:justify-center">

                <div className="w-5/6  ml-7 sm:ml-0 sm:w-4/5 lg:w-5/6">
                   <Chart />
                </div>
            </div>
            
           

            <div className=" sm:px-3 md:pr-6 py-3 mb-14 flex mt-12  flex-col justify-between  w-full sm:flex-row">
                <div className=" h-64 w-80  mb-7 px-2 py-2 rounded-xl sm:w-2/6">
                  <Barchart />
                </div>

                <div className=" h-64 w-80 mb-7 px-2 py-2 rounded-xl sm:w-2/6">
                    <Chart />
                </div>

                {/* <div className="flex flex-col h-64 sm:w-1/4">
                    <div className="h-2/5 w-full px-2 py-2  rounded-xl">
                       <PieC />
                    </div>

                    <div className="h-1/5"/>

                    <div className="h-2/5 w-full px-2 py-2  rounded-xl">
                        <Barchart />
                    </div>
                </div> */}


            </div>

            
            
        </div>
    )
}

export default Feed
