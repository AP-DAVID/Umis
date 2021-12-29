import { CalendarIcon } from "@heroicons/react/outline"
import FlipMove from "react-flip-move"

import Thumbnail from "./Thumbnail"



function Subjects({SubjectOffering, login}) {

    const subjects = login?.subject;
    return (
        <div className ="flex md:ml-10 flex-col w-full pt-6 scrollbar-hide overflow-y-scroll h-screen" >
        

           

           <div>
               <div className="mt-6 " /> 
               <div className="flex space-x-2">
                  <CalendarIcon className="h-6 w-6 text-yellow-500" />
                  <h1 className="text-md font-medium text-red-400">2021 first term</h1>
              </div>

                <h1 className="text-4xl font-bold">Subjects Offering!</h1>

                
            </div>


            <div className="sm:px-5 my-10 mr:10  sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">

                {subjects?.map(subject =>(
                    <Thumbnail key={subject.id} data={subject.classId[0]}  source={subject?.picture} text1={subject?.subjectname} text2={subject.classId[0].classname} />
                ))}

            </div>


            
        </div>
    )
}

export default Subjects
