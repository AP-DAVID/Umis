import { DotsHorizontalIcon, SearchIcon,  VideoCameraIcon, CalendarIcon} from "@heroicons/react/solid"
import { Calendar } from "../Calendar/Calendar"
import { useState } from "react";
import Calendarmodal from "./Modals/Widgetmodal";


function Widgets() {
    const [calendarOpen, setCalenderOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        
        <div className="flex flex-col mt-5">
            {/* <div className="flex justify-between items-center text-gray-500 mb-5">
                
            </div> */}
          <div className="flex justify-end mr-0">    
            <button
                className="cursor-pointer text-xl leading-none  border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setShowModal(true)}
                >
                    <CalendarIcon className="h-10 cursor-pointer px-3 py-2 bg-gray-100 rounded-xl"/>
                
                </button>

          </div>
          
          
          <Calendarmodal showModal = {showModal} setShowModal={setShowModal} />
          
          <div className={(calendarOpen ? "lg:inline-flex" : "lg:inline-flex hidden")}>    

         
            <Calendar />
             


          </div>

           
        </div>
       
    )
}

export default Widgets
