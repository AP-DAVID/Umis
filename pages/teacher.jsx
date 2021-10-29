import Feed from "../components/teacherDashboard/Feed"
import Header from "../components/teacherDashboard/Header"
import Sidebar from "../components/teacherDashboard/Sidebar"
import Widgets from "../components/teacherDashboard/Widgets"
import { useState } from "react"
import Groups from "../components/teacherDashboard/Groups/Groups"
import Subjects from "../components/teacherDashboard/Subjects/Subjects"
import Chat from "../components/teacherDashboard/Chat/Chat"
import { SubjectOffering } from "../utils/subjectdummydata"
import Settings from "../components/teacherDashboard/settingss/Settings"
import Result from "../components/teacherDashboard/Result/Result"
import Profile from "../components/teacherDashboard/Profile/Profile"



function Teacher({ results }) {
    const [reveal, setReveal] = useState(1)
    return (
        <div className="h-screen overflow-y-hidden sm:overflow-x-scroll overflow-x-hidden">
            {/* Header */}
            <Header />
           <main className="flex">
                <Sidebar reveal={reveal} setReveal= {setReveal} />

             <div className="flex  w-full">
               
              {reveal ===1 && ( <Feed />)} 

              {reveal ===2 && (<Groups/>)}

              {reveal ===3 && (<Subjects SubjectOffering={results}/>)}

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

export default Teacher


export async function getServerSideProps(context){
  
  
    const request = SubjectOffering
  
    return {
      props:{
        results : request
      }
    }
  }
