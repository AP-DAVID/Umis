import { UserCircleIcon, PencilAltIcon } from "@heroicons/react/outline"
import Table from "./Table"


function Profile({login}) {
    return (
        <div className ="ml-3 flex md:ml-10 flex-col overflow-x-scroll scrollbar-hide w-full pt-6 overflow-y-scroll h-screen" >




            <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <UserCircleIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">Yo! {login?.username}</h1>
              </div>

              <div className="flex justify-between align-middle">
                  <h1 className="text-4xl font-semibold"> Your <span className="font-bold">Details</span></h1>
                  <PencilAltIcon className="h-6 w-6 border rounded-md  mr-3 " />
              </div>
             
           </div>


           <div className="w-full ">
               <Table data={login}/>
           </div>


        </div>
    )
}

export default Profile
