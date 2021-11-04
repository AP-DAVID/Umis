import Feed from "../../components/chatComponent/Feed"
import Header from "../../components/chatComponent/Header"
import Sidebar from "../../components/chatComponent/Sidebar"
import Nav from "../../components/Nav"

function Index() {
    return (
        <div className="bg-gray-900 h-screen overflow-y-hidden">
            <div className="mb-6"><Nav /></div>
            <Header />

            <main className="flex h-full w-full">
                <Sidebar />

                <div className="flex h-full  w-full px-2 sm:px-7">
                      
                      <Feed />

                </div>
            </main>
        </div>
    )
}

export default Index
