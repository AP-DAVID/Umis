import { AdjustmentsIcon, ChevronDoubleRightIcon, EmojiHappyIcon } from "@heroicons/react/solid"

function Chatinput() {
    return (
        <div className=" flex flex-col justify-end h-full w-full py-3">
            <div className=" flex sm:px-4 items-center w-full space-x-3">

            <div className=" w-full  rounded-l-full rounded-r-full items-center h-14 bg-gray-300 px-2 flex justify-between">
                
                <div className="flex items-center space-x-3">
                    <div><EmojiHappyIcon className="h-5 w-5 text-green-500 cursor-pointer"/></div> 
                    <div><h1>Type a Message</h1></div>
                </div>

                <div>
                    <AdjustmentsIcon className="h-5 w-5 cursor-pointer"/>
                </div>
            </div>

            <div className="cursor-pointer">
                <ChevronDoubleRightIcon className="bg-green-400 rounded-full px-4 py-4 text-white h-14 w-14"/>
            </div>
        </div>

       </div>
    )
}

export default Chatinput
