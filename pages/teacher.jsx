import Feed from "../components/teacherDashboard/Feed"
import Header from "../components/teacherDashboard/Header"
import Sidebar from "../components/teacherDashboard/Sidebar"
import Widgets from "../components/teacherDashboard/Widgets"
import Announcement from "../components/teacherDashboard/Announcement/Announcement"
import { useEffect, useState } from "react"
import Groups from "../components/teacherDashboard/Groups/Groups"
import Subjects from "../components/teacherDashboard/Subjects/Subjects"
import Chat from "../components/teacherDashboard/Chat/Chat"
import { SubjectOffering } from "../utils/subjectdummydata"
import Settings from "../components/teacherDashboard/settingss/Settings"
import Result from "../components/teacherDashboard/Result/Result"
import Profile from "../components/teacherDashboard/Profile/Profile"
import { getSession } from "next-auth/client"
import Teacherlogin from "../components/loginteachers/login"
import axios from "axios"
import { getData } from './api/teacher/[id]'



function Teacher({  session, data }) {
    const [reveal, setReveal] = useState(1)
    const [login, setLogin] = useState(session?.user)


   




    return (

      <div>


          { 
            session && session.user.section === "teacher" ?
             ( 
             
              <div className="h-screen overflow-y-hidden sm:overflow-x-scroll overflow-x-hidden">
                      {/* Header */}
                      <Header username= {login.username} />
                    <main className="flex">
                          <Sidebar reveal={reveal} setReveal= {setReveal} />

                      <div className="flex  w-full">
                        
                        {reveal ===1 && ( <Feed />)} 

                        {reveal ===2 && (<Groups login={data}/>)}

                        {reveal ===3 && (<Subjects login={data} />)}
                        
                        {reveal ===8 && ( <Announcement />)}

                        {reveal ===4 && (<Chat />)}

                        {reveal ===5 && (<Settings />)}

                        {reveal ===6 && (<Result />)}

                        {reveal ===7 && (<Profile login={data}/>)}

                        <Widgets />

                      </div>
                          
                          
                    </main>

                    
                  </div>
                
              )
              :

              (
                <Teacherlogin />
              )
            
          }

         


      </div>

    )
}

export default Teacher


export async function getServerSideProps(ctx){
  
  const sess = await getSession(ctx)


  const res = await getData(sess?.user?._id)
  const data = await JSON.parse(JSON.stringify(res))
 
  
    return {
      props:{
       
        session: sess,
        data
      }
    }
  }
