import React from "react";
import {MenuIcon, UserCircleIcon} from "@heroicons/react/solid"


export default function Nav({setRoute, route}, props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav

      className={
        (props.transparent
          ? "top-0 absolute z-50  w-full "
          : "relative ") +
        " flex flex-wrap items-center justify-between px-2 py-3 border-b shadow-sm"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div className="w-screen sm:items-center flex flex-col sm:flex-row sm:justify-between ">

            <div className="items-center flex space-x-3">
                <div className=" rounded-full hover:bg-gray-200">
                    <MenuIcon className="h-7 w-10 cursor-pointer"/>
                </div>

               <div className="flex flex-col hover:underline cursor-pointer">
                    <div>
                    <h1 className="font-medium text-base">Biology</h1>
                    </div>

                    <div>
                    <h1 className="font-light">Mrs Akande</h1>
                    </div>
                </div> 
               
        
         </div>



           <div className="flex h-10 mt-7  text-gray-700 font-normal space-x-16 cursor-pointer justify-center">
               <div onClick={() => setRoute(1)} className={` ${route === 1 && "border-b-4"} hover:bg-gray-100 rounded-md px-2  border-black`}><h1>Stream</h1></div>
               <div onClick={() => setRoute(2)} className={` ${route === 2 && "border-b-4"} hover:bg-gray-100 rounded-md px-2  border-black`}><h1>Classwork</h1></div>
               <div onClick={() => setRoute(3)} className={` ${route === 3 && "border-b-4"} hover:bg-gray-100 rounded-md px-2  border-black`}><h1>People</h1></div>
           </div>


           <div>
                

                <div>
                    <UserCircleIcon className ="h-10 w-10 hidden sm:inline-flex text-purple-500"/>
                </div>
                
           </div>




          
        </div>
      </div>
    </nav>
  );
}
