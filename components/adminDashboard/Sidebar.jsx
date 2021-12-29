import SidebarRow from "./SidebarRow"


import {
    PresentationChartLineIcon,
    FireIcon,
    UserGroupIcon,
    AcademicCapIcon,
    SpeakerphoneIcon,
    ChatAlt2Icon,
    UserCircleIcon,
    MenuIcon,
    CogIcon,
    LogoutIcon,
    ClipboardListIcon,
    XIcon
} from "@heroicons/react/solid"


import { useState } from 'react'
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";


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


        
                <SidebarRow setReveal={setReveal} active={reveal ===1 ? active : notActive} Icon={PresentationChartLineIcon} title="Dashboard"  />
                <SidebarRow setReveal={setReveal} active={reveal ===9 ? active : notActive} Icon={SpeakerphoneIcon} title="Announcement"  />
                <SidebarRow setReveal={setReveal} active={reveal ===8 ? active : notActive} Icon={ClipboardListIcon} title="Class"  />
                <SidebarRow setReveal={setReveal} active={reveal ===2 ? active : notActive} Icon={FireIcon} title="Students"  />
                <SidebarRow setReveal={setReveal} active={reveal ===3 ? active : notActive} Icon={UserGroupIcon} title="Teachers"  />
                 <SidebarRow setReveal={setReveal} active={reveal ===7 ? active : notActive} Icon={UserCircleIcon} title="Profile"  />
                <SidebarRow setReveal={setReveal} active={reveal ===5 ? active : notActive} Icon={CogIcon} title="Settings"  />
                <SidebarRow setReveal={setReveal} active={reveal ===6 ? active : notActive} Icon={AcademicCapIcon} title="Results"  />
                
                <SidebarRow setReveal={setReveal} active={reveal ===4 ? active : notActive} Icon={ChatAlt2Icon} title="Chat"  />
                

                <SidebarRow setReveal={setReveal} Icon={LogoutIcon} title="Log Out"  />
                

            
          


        </div>

    </div>
    
    )
}

export default Sidebar
