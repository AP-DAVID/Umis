import {UserCircleIcon, EyeOffIcon, ArrowNarrowRightIcon} from '@heroicons/react/outline'


function Form() {
    return (
        <div className="h-full">
            

            <form className="flex h-full mt-32 flex-col justify-center space-y-4">

                <div className="flex">
                  <input type="text" placeholder="Teacher ID"  
                      className="px-5 h-14 w-4/5 sm:w-72 placeholder-gray-400 rounded-tl-lg rounded-bl-lg bg-gray-700"
                   
                   />
                  <div className="h-14 w-10 px-1 items-center flex flex-col justify-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg">
                    <UserCircleIcon/>
                  </div>
                </div>

                <div className="flex">
                  <input type="password" placeholder="Password"  className="px-5 h-14 w-4/5 sm:w-72 placeholder-gray-400 rounded-tl-lg rounded-bl-lg bg-gray-700"/>
                  <div className="h-14 w-10 px-1 flex flex-col justify-center items-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg">
                    <EyeOffIcon />
                  </div>
                </div>
               

                <div>
                    <button type="button"  className="h-14 w-60 sm:w-80 ml-1 text-white hover:shadow-xl rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   hover:from-green-400 hover:to-blue-500">
                        <div className="flex justify-between items-center px-4">
                            <div><h1>Login to Your Account</h1></div>

                           <ArrowNarrowRightIcon className="text-white h-12 w-8"/>

                        </div>
                   </button>
                </div>
                
            </form>

        </div>
    )
}

export default Form
