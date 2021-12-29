
import { Avatar, Image } from 'antd';
import { useState } from 'react';
import Edit from './Edit';
import {format} from "timeago.js";

function Row({teacher}) {

    const [visible, setVisible] = useState(false)


    return (
        <>
                <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <div><Avatar src= {<Image  style={{ width : 32, height : 32}} className="object-cover w-full h-full rounded-full" src={teacher.profile ? teacher.profile : "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"} />}/></div>
                    
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <Edit teacher={teacher} visible ={visible} setVisible={setVisible}/>
                        <p className="font-semibold text-black">{teacher?.lastname}-{teacher?.firstname}</p>
                        <p className="text-xs text-gray-600">{teacher?.lastname}</p>
                        </div>
                    </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">{teacher.age}</td>
                    <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {teacher.status} </span>
                    </td>
                    <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                        <h1 className="text-sm ">{format(teacher.createdAt)}</h1>

                        <button onClick={() => setVisible(true)} className="bg-blue-500 px-1 py-1 text-black hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Edit</button>

                        <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                    </td>
                
                </tr>
        </>
    )
}

export default Row
