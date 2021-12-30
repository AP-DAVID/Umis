import { useState } from "react"
import Assign from "../../components/groupsComponent/Assign"
import Nav from "../../components/groupsComponent/nav"
import People from "../../components/groupsComponent/People"
import Stream from "../../components/groupsComponent/stream"
import { getSession, useSession } from "next-auth/client"
import { getData } from '../api/group/[id]'

function Index({ data}) {
    const [route, setRoute] = useState(1)
    const [session, loading] = useSession()

    // console.log(data);
   
    return (
        <div>

           {  session ?
              (

                <>
                    <Nav setRoute={setRoute} login={session?.user} route={route} data={data}/>

                    {
                        route === 1 && (

                        <Stream data= {data} login={session?.user}/>

                        )
                    }

                    
                    {
                        route === 2 && (

                        <Assign login={session?.user} data = {data}/>
                        
                        )
                    }

                    
                    {
                        route === 3 && (

                        <People data={data}/>
                        
                        )
                    }
                </>

              )
                : 

              (
                  <div>
                      <h1>The 404 page will be here</h1>
                  </div>
              )
              

          }



            
            
        </div>
    )
}

export default Index

export async function getServerSideProps(ctx){
  
    const { id } = await ctx.query;
     
    const res = await getData(id)
    // const session = await getSession(ctx)
    const data = await JSON.parse(JSON.stringify(res))


  
    return {
      props:{
        data,
        // session
      }
    }
  }
