import { UserCircleIcon } from "@heroicons/react/solid"

function Message() {
    return (
        <div>
            <div className="py-2 flex space-x-3">

                <div className="flex flex-col items-center cursor-pointer">
                    <div>
                        <UserCircleIcon className="h-8 w-8 text-purple-400"/>
                    </div>
                    <div>
                        <h1 className="text-sm text-gray-500 ">date</h1>
                    </div>
                </div>

                <div 
                    className=" bg-gray-300 rounded-tr-xl rounded-br-xl rounded-bl-xl" 
                    style={{minHeight : "70px", minWidth : "100px", maxWidth : "600px"}}
                >
                    <p className="line-clamp-6 px-2 py-2 font-mono"> 
                           Yo bro wassup?
                    </p>
                </div>

            </div>

            <div className="py-2 justify-end flex space-x-3">
                

                    <div 
                        className=" bg-gray-800 shadow-md rounded-tl-xl rounded-bl-xl rounded-br-xl" 
                        style={{minHeight : "70px", minWidth : "100px", maxWidth : "600px"}}
                    >
                        <p className="line-clamp-6 px-2 py-2 text-white font-mono"> 
                                Hey man, I dey
                        </p>
                     </div>

                     <div className="flex flex-col items-center cursor-pointer">

                        <div>
                            <UserCircleIcon className="h-8 w-8 text-purple-400"/>
                        </div>
                        <div>
                            <h1 className="text-sm text-gray-500 ">date</h1>
                        </div>

                      </div>


            </div>
        </div>
    )
}

export default Message
