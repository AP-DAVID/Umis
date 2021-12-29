import {
    SearchIcon,
    BellIcon
} from "@heroicons/react/outline";

import Image from 'next/image';




function Header({username}) {
    return (
        <div className='sticky w-full top-0 z-50 flex align-middle justify-between bg-white p-2 lg:px-5'>

            {/* SearchBox of the INput feed */}

            <div >
                

                <div className="flex md:ml-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="hidden md:inline-flex ml-2 bg-transparent outline-none
                     placeholder-gray-500 " type="text" placeholder="Search"/>
                </div>


                {/* <Feed /> */}


            </div>

          <div>
                <div className="flex space-x-2 sm:space-x-5 justify-end content-center">

                    <BellIcon className="h-10 cursor-pointer px-3 py-2 bg-gray-100 rounded-xl"/>

                    <div className="flex flex-col sm:flex-row px-3 h-11 cursor-pointer items-center sm:py-2 space-x-2 group bg-gray-100 rounded-xl">

                        <Image src="/dogface.svg" height={30} width="30" className="group-hover:animate-bounce" layout="fixed"/>

                        <h4 className="hidden group-hover:inline-flex sm:inline-flex text-md text-gray-900">{username} </h4>

                    </div>

                    
                </div>

                
            
        </div>







            


        </div>
    )
}

export default Header
