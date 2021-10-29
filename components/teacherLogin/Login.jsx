import Nav from "../Nav"
import Form from "./Form"

function Login() {
    return (
        <div className="relative pt-16 pb-32 flex flex-col content-center items-center justify-center"  style={{minHeight: "95vh"}}>

            
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="">
                      <h1 className="text-white font-semibold text-5xl">
                        Login to Your Account.
                      </h1>
                      <p className="mt-4 text-lg text-gray-500">
                        Your Personalized student Management System, Connect with your teachers and Students virtually
                      </p>
                    </div>
                  </div>
  
                </div>
            </div>



            <Form />







        </div>
    )
}

export default Login
