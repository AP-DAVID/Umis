import {
    SearchIcon,
    BellIcon
} from "@heroicons/react/outline";
import Search from './Search'

function Header({data, login, onSearch, setSection}) {
    return (
        <div className="relative">
            
            <div className="py-7 px-2">
                

                <div className="z-50">
                    <Search data={data} className="z-50" login={login.user} onSearch={onSearch} setSection={setSection}/>
                    {/* <input className="inline-flex ml-2 bg-transparent outline-none
                     placeholder-gray-500 " type="text" placeholder="Search"/> */}
                </div>


                {/* <Feed /> */}


            </div>



        </div>
    )
}

export default Header
