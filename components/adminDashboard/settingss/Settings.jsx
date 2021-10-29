import Sett from "./Set"
import { HandIcon } from "@heroicons/react/outline"


function Settings() {
    return (
        <div className="flex md:ml-10 flex-col scrollbar-hide w-full pt-6 overflow-y-scroll scrollbar-hide h-screen">

            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <HandIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Hey, Admin!</h1>
              </div>

                <h1 className="text-4xl font-bold">The Settings Page!</h1>

                
            </div>




            <Sett />

            
            
            
            
            
        </div>
    )
}

export default Settings
