import Feed from "../components/adminDashboard/Feed"
import Header from "../components/adminDashboard/Header"
import Sidebar from "../components/adminDashboard/Sidebar"
import Widgets from "../components/adminDashboard/Widgets"
import { useEffect, useState } from "react"
import Students from "../components/adminDashboard/Students/Students"
import Teachers from "../components/adminDashboard/Teachers/Teachers"
import Chat from "../components/adminDashboard/Chat/Chat"
import Class from "../components/adminDashboard/Class/Class"
import Announcement from "../components/adminDashboard/Announcement/Announcement"
import { SubjectOffering } from "../utils/subjectdummydata"
import Settings from "../components/adminDashboard/settingss/Settings"
import { getSession } from "next-auth/client"
import Result from "../components/adminDashboard/Result/Result"
import Profile from "../components/adminDashboard/Profile/Profile"
import Adminlogin from "../components/loginadmin/login"
import axios from "axios";
import Login from "../components/adminLogin/Login"
import { getData } from './api/admin/yep'



function admin({ results, session, data }) {
    const [reveal, setReveal] = useState(1)

    const [login, setLogin] = useState(session?.user)


    
   

    // const[data, setData] = useState([]);





    return (
      
      <div>
       
              { 
                session && session.user.section === "admin" ?(
                
                <div className="h-screen overflow-y-hidden sm:overflow-x-scroll overflow-x-hidden">
                  {/* Header */}
                  <Header username= {login.username} />

                <main className="flex">
                      <Sidebar reveal={reveal} setReveal= {setReveal} />

                  <div className="flex  w-full">
                    
                    {reveal ===1 && ( <Feed  login={login}/>)} 

                    {reveal ===9 && ( <Announcement />)}

                    {reveal ===8 && (<Class login={data.classes} data={data}/>)}

                    {reveal ===2 && (<Students login={data}/>)}

                    {reveal ===3 && (<Teachers login={data}/>)}

                    {reveal ===4 && (<Chat />)}

                    {reveal ===5 && (<Settings />)}

                    {reveal ===6 && (<Result />)}

                    {reveal ===7 && (<Profile login={data}/>)}

                    

                    <Widgets />

                  </div>
                      
                      
                </main>

                
              </div>
                
              ) : 
              (
                <Adminlogin />
              )
          }

        

      </div>
    )
}

export default admin


export async function getServerSideProps(ctx){
   
   const sess = await getSession(ctx)


      const res = await getData(sess?.user?._id)
      const joke = await JSON.parse(JSON.stringify(res))
      
    return {
      props:{
        
        session: sess,
        data : joke
     
      }
    }
  }

