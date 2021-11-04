import {
    SearchIcon,
    BellIcon
} from "@heroicons/react/outline";

function Header() {
    return (
        <div className="sticky">
            
            <div className="py-7 px-2">
                

                <div className="flex md:ml-2 px-2 w-56 rounded-full bg-gray-200 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="inline-flex ml-2 bg-transparent outline-none
                     placeholder-gray-500 " type="text" placeholder="Search"/>
                </div>


                {/* <Feed /> */}


            </div>



        </div>
    )
}

export default Header
