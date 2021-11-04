import { HandIcon, PlusIcon } from "@heroicons/react/outline"
import Table from "./Table"

function Teachers() {
    return (
        <div className=" flex md:ml-10 flex-col overflow-x-scroll scrollbar-hide w-9/12 pt-6 overflow-y-scroll h-screen">
            
            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, Admin!</h1>
              </div>

                <h1 className="text-4xl font-bold">Your Teachers!</h1>

                
            </div>


            <div className="w-full">
               <Table />
           </div>

           <div  className="px-2 py-4 rounded-full cursor-pointer fixed p-14 bottom-8 right-3 sm:right-80 origin-bottom-right space-y-2 text-align group">
                  <div className="invisible group-hover:visible  "><h1 className="text-sm text-gray-500 font-md">add</h1></div>
                  <div className="rounded-full px-3 py-3 bg-blue-500"><PlusIcon className="hover:animate-spin h-6 w-6"/></div>
            </div>





        </div>
    )
}

export default Teachers
