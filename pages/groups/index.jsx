import { useState } from "react"
import Assign from "../../components/groupsComponent/Assign"
import Nav from "../../components/groupsComponent/nav"
import People from "../../components/groupsComponent/People"
import Stream from "../../components/groupsComponent/stream"


function Index() {
    const [route, setRoute] = useState(1)
    return (
        <div>
            <Nav setRoute={setRoute} route={route}/>

            {
                route === 1 && (

                   <Stream />

                )
            }

            
            {
                route === 2 && (

                   <Assign />
                   
                )
            }

            
            {
                route === 3 && (

                   <People />
                   
                )
            }

            
            
        </div>
    )
}

export default Index
