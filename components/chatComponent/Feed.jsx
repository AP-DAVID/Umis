
import Chatinput from "./Chatinput"
import Message from "./Mesage"

function Feed() {
    return (
        <div className="h-5/6 w-full relative sm:px-7 px-2 scrollbar-hide rounded-lg overflow-y-scroll bg-gray-100 shadow-md">
            

         <main className="h-5/6 overflow-y-scroll w-full scrollbar-hide"> 

            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            
         </main>
          
          
       
       
        <footer className="">
            <Chatinput />
        </footer>
         

        </div>
    )
}
export default Feed
