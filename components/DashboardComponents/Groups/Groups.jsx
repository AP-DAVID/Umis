import { UserGroupIcon, PencilAltIcon } from "@heroicons/react/outline"



function Groups() {
    return (
        <div className ="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll h-screen" >
        

        

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

                




           </div>




          


            
        </div>
    )
}

export default Groups
