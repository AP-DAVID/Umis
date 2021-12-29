import Nav from "../Nav"
import Login from "../adminLogin/Login"

function Adminlogin() {
    return (
        <div className="h-screen overflow-y-scroll flex flex-col justify-between sm:overflow-x-scroll scrollbar-hide overflow-x-scroll bg-black">
            <Nav />





          <main>
            <Login />
          </main>
            

        </div>
    )
}

export default Adminlogin
