import { useState } from "react"
import Edit from "./Edit"
import { Avatar, Image } from 'antd';
import {format} from "timeago.js";
function Row({student}) {

    const [visible, setVisible] = useState(false)
    return (
        <>
            <tr key={student._id} className="text-gray-700">
                
                <td className="px-4 py-3 border">
                <Edit student={student} visible ={visible} setVisible={setVisible}/>
                <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                    <div><Avatar src= {<Image  style={{ width : 32, height : 32}} className="h-12 w-12 rounded-full mr-7 object-cover" src={student.profile ? student.profile : "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"} />}/></div>
                    
                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                    <p className="font-semibold text-black">{student?.lastname} - {student?.firstname}</p>
                    <p className="text-xs text-gray-600">{student?.class[0]?.classname}</p>
                    </div>
                </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border">{student?.age}</td>
                <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {student.status}</span>
                </td>   
                <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                    <h1 className="text-sm ">{format(student.createdAt)}</h1>

                    <button onClick={() => setVisible(true)} className="bg-green-500 px-1 py-1 text-black hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer">Edit</button>

                    <button className="bg-green-500 px-1 py-1 rounded-lg text-black hover:bg-blue-500 hover:text-white cursor-pointer">Delete</button>

                </td>
            
                </tr>
        </>
    )
}

export default Row
