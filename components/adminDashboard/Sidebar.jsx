import SidebarRow from "./SidebarRow"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    MenuIcon,
    XIcon
} from "@heroicons/react/solid"


import { useState } from 'react'
import { faAddressBook, faBullhorn, faCaretSquareUp, faCog, faComments, faGraduationCap, faSignOutAlt, faTachometerAlt, faTemperatureHigh, faUser, faUsers, faUserSecret } from "@fortawesome/free-solid-svg-icons";


function Sidebar({setReveal, reveal}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const active = true;
    const notActive = false;
    
    return (


      <div>


        <button 
        
            className="cursor-pointer text-xl leading-none  border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
        >

         {!sidebarOpen ? ( <MenuIcon className="h-10 sm:hidden cursor-pointer px-3 py-2 bg-blue-400 rounded-xl"/>) : (
             <XIcon className="h-10 sm:hidden cursor-pointer px-3 py-2 bg-blue-400 rounded-xl"/>
         )}

        </button>
      
        <div className={(sidebarOpen ? "sm:border-r-2 border-blue-300 sm:flex flex-col h-screen" : "hidden sm:flex shadow-2xl  flex-col h-screen ")}> 

          
            <SidebarRow src='/dashlogo.svg' srcTitle="Admin" />
         

        
                <SidebarRow setReveal={setReveal} active={reveal ===1 ? active : notActive} Icon={faTachometerAlt} title="Dashboard"  />
                <SidebarRow setReveal={setReveal} active={reveal ===9 ? active : notActive} Icon={faBullhorn} title="Announcement"  />
                <SidebarRow setReveal={setReveal} active={reveal ===8 ? active : notActive} Icon={faCaretSquareUp} title="Class"  />
                <SidebarRow setReveal={setReveal} active={reveal ===2 ? active : notActive} Icon={faAddressBook} title="Students"  />
                <SidebarRow setReveal={setReveal} active={reveal ===3 ? active : notActive} Icon={faUsers} title="Teachers"  />
                 <SidebarRow setReveal={setReveal} active={reveal ===7 ? active : notActive} Icon={faUser} title="Profile"  />
                <SidebarRow setReveal={setReveal} active={reveal ===5 ? active : notActive} Icon={faCog} title="Settings"  />
                {/* <SidebarRow setReveal={setReveal} active={reveal ===6 ? active : notActive} Icon={} title="Results"  /> */}
                
                <SidebarRow setReveal={setReveal} active={reveal ===4 ? active : notActive} Icon={faComments} title="Chat"  />
                
                
                <SidebarRow setReveal={setReveal} Icon={faSignOutAlt} title="Log Out"  />
                

            
          


        </div>

    </div>
    
    )
}

export default Sidebar
