import { UserCircleIcon, UserIcon } from "@heroicons/react/solid"

function Details() {
    return (
        <div className="flex space-x-4 mt-5 items-center">

            <div><UserCircleIcon className="h-7 w-7"/></div>
            <div className="text-base text-gray-600 font-medium"><h1> Akintola Abiodun</h1></div>

        </div>
    )
}

export default Details
