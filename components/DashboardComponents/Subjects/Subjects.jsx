import { CalendarIcon } from "@heroicons/react/outline"
import FlipMove from "react-flip-move"

import Thumbnail from "./Thumbnail"



function Subjects({SubjectOffering}) {
    return (
        <div className ="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll h-screen" >
        

        

           <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <CalendarIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">2021 first term</h1>
              </div>

                <h1 className="text-4xl font-bold">Subjects Offering!</h1>

                
            </div>


            <div className="sm:px-5 my-10 mr:10  sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">

                {SubjectOffering.map(subject =>(
                    <Thumbnail key={subject.id}  source={subject.src} text1={subject.Name} text2={subject.teacher} />
                ))}

            </div>


            
        </div>
    )
}

export default Subjects
