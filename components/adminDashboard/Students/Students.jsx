import { HandIcon } from "@heroicons/react/outline"
import Table from "./Table"
function Students() {
    return (
        <div className=" flex md:ml-10 flex-col overflow-x-scroll scrollbar-hide w-9/12 pt-6 overflow-y-scroll h-screen">
            
            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, Admin!</h1>
              </div>

                <h1 className="text-4xl font-bold">Your Students!</h1>

                
            </div>


            <Table />





        </div>
    )
}

export default Students
