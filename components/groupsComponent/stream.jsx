import { BookOpenIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/outline"

function Stream() {
    return (
        <div className="flex px-2 space-y-4 flex-col items-center py-5">
            
            <div className="px-5 py-5 h-44 sm:h-56 w-full sm:w-3/4 flex flex-col justify-end bg-gray-700 rounded-lg shadow-md ">

                <div className="flex flex-col space-y-2 text-white">
                    <h1 className="text-4xl font-medium"> Biology </h1>
                    <h1 className="text-2xl"> MRS AKANDE</h1>
                </div>

            </div>

           
           <div className="w-full flex-col space-y-5 sm:w-3/4">

             
               <div className="flex px-4 py-4 space-x-4 cursor-pointer items-center shadow-lg border-t-2 rounded-lg group">
                    <div><UserCircleIcon className="h-10 w-10 text-purple-500"/></div>
                    <div className="font-light group-hover:font-medium group-hover:text-purple-500"><h1>Announce Something to the class</h1></div>
               </div>   

               <div className="px-4 border rounded-lg py-4 ">
                   <div className="text-2xl"> View class updates and connect with class here</div>

                   <div className="flex space-x-3 text-gray-600 items-center">
                       <BookOpenIcon className="h-9 w-9"/>
                       <h1>See when new assignments are posted</h1>
                   </div>

               </div>

           </div>
            

        </div>
    )
}

export default Stream
