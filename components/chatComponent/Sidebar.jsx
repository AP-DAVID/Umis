import SidebarRow from "./SidebarRow"

function Sidebar({setCurrentChat, conversations, logins}) {
    return (
        <div className="sm:px-4 sm:w-96">
            

            <div className={ "sm:border-r-2 ml-2 sm:px-1 sm:py-2 bg-gray-200 rounded-xl shadow-md sm:flex flex-col"}> 

                
                {/* <SidebarRow />
                <SidebarRow />
                <SidebarRow /> */}


                {conversations.map((c) => (
                    <div onClick={() => setCurrentChat(c)}
                    >
                        
                        <SidebarRow conversation={c} currentUser={logins} />

                    </div>
              ))}

                


            </div>



        </div>
    )
}

export default Sidebar
