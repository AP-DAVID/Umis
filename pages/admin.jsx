import Feed from "../components/adminDashboard/Feed"
import Header from "../components/adminDashboard/Header"
import Sidebar from "../components/adminDashboard/Sidebar"
import Widgets from "../components/adminDashboard/Widgets"
import { useState } from "react"
import Students from "../components/adminDashboard/Students/Students"
import Teachers from "../components/adminDashboard/Teachers/Teachers"
import Chat from "../components/adminDashboard/Chat/Chat"
import { SubjectOffering } from "../utils/subjectdummydata"
import Settings from "../components/adminDashboard/settingss/Settings"
import Result from "../components/adminDashboard/Result/Result"
import Profile from "../components/adminDashboard/Profile/Profile"



function admin({ results }) {
    const [reveal, setReveal] = useState(1)
    return (
        <div className="h-screen overflow-y-hidden sm:overflow-x-scroll overflow-x-hidden">
            {/* Header */}
            <Header />
           <main className="flex">
                <Sidebar reveal={reveal} setReveal= {setReveal} />

             <div className="flex  w-full">
               
              {reveal ===1 && ( <Feed />)} 

              {reveal ===2 && (<Students/>)}

              {reveal ===3 && (<Teachers />)}

              {reveal ===4 && (<Chat />)}

              {reveal ===5 && (<Settings />)}

              {reveal ===6 && (<Result />)}

              {reveal ===7 && (<Profile />)}

               <Widgets />

             </div>
                
                
           </main>

          
        </div>
    )
}

export default admin


export async function getServerSideProps(context){
  
  
    const request = SubjectOffering
  
    return {
      props:{
        results : request
      }
    }
  }
