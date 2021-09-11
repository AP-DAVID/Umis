import { HandIcon } from "@heroicons/react/outline"
import Barchart from "./Barchart"


function Feed() {
    return (
        <div className="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll h-screen">

            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, Skills!</h1>
              </div>

                <h1 className="text-4xl font-bold">You've got some Points!</h1>

                
            </div>

            
            
            <Barchart />

            <div className="sm:px-3 pr-6 py-3 mb-14 flex mt-12  flex-col justify-between  w-full sm:flex-row">
                <div className=" h-64 bg-green-200  mb-5 px-2 py-2 rounded-xl sm:w-2/6">
                  Something is here
                </div>

                <div className=" h-64 bg-green-200 mb-5 px-2 py-2 rounded-xl sm:w-2/6">
                  Something is also here
                </div>

                <div className="flex flex-col h-64 sm:w-1/4">
                    <div className="h-2/5 w-full px-2 py-2 bg-red-100 rounded-xl">
                      and here
                    </div>

                    <div className="h-1/5"/>

                    <div className="h-2/5 w-full px-2 py-2 bg-blue-100 rounded-xl">
                      and here
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default Feed
