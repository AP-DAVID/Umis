import Feed from "../components/studentDashboard/Feed"
import Header from "../components/studentDashboard/Header"
import Sidebar from "../components/studentDashboard/Sidebar"
import Widgets from "../components/studentDashboard/Widgets"
import { useState } from "react"
import Subjects from "../components/studentDashboard/Subjects/Subjects"
import Groups from "../components/studentDashboard/Groups/Groups"
import Chat from "../components/studentDashboard/Chat/Chat"
import { SubjectOffering } from "../utils/subjectdummydata"
import Settings from "../components/studentDashboard/settingss/Settings"
import Result from "../components/studentDashboard/Result/Result"
import Profile from "../components/studentDashboard/Profile/Profile"



function dashboard({ results }) {
    const [reveal, setReveal] = useState(1)
    return (
        <div className="h-screen overflow-y-hidden overflow-x-scroll">
            {/* Header */}
            <Header />
           <main className="flex">
                <Sidebar reveal={reveal} setReveal= {setReveal} />

             <div className="flex w-screen justify-between">
               
              {reveal ===1 && ( <Feed />)} 

              {reveal ===2 && (<Subjects SubjectOffering={results}/>)}

              {reveal ===3 && (<Groups />)}

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

export default dashboard


export async function getServerSideProps(context){
  
  
    const request = SubjectOffering
  
    return {
      props:{
        results : request
      }
    }
  }
