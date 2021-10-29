import { UserGroupIcon, PencilAltIcon } from "@heroicons/react/outline"
import Groupcard from "./Groupcard"



function Groups() {
    return (
        <div className ="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll h-screen scrollbar-hide" >
        

        

           <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <UserGroupIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Yo!</h1>
              </div>

              <div className="flex justify-between align-middle">
                  <h1 className="text-4xl font-normal">Choose <span className="font-bold">Groups</span></h1>
                  <PencilAltIcon className="h-6 w-6 border rounded-md  mr-3 " />
              </div>
             
           </div>

           <div>

                    <div className="w-16 overflow-hidden inline-block">
                        <div className=" h-12 w-11 bg-gray-400 rotate-45 transform origin-bottom-left"></div>
                    </div>

                   <div className="sm:px-5  my-10 sm:mr:10 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                          <Groupcard />
                          <Groupcard />
                          <Groupcard />
                          <Groupcard />
                          <Groupcard />
                          <Groupcard />
                   </div>
                   

          </div>




          


            
        </div>
    )
}

export default Groups
