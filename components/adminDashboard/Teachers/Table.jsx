import { Avatar, Image } from 'antd';
import { useState } from 'react';
import Row from './Row';


function Table({teachers}) {

    


    return (
        <div className="pb-7">
            
            
            
            <section className="container pt-6 pb-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Age</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">


                    {     
                       
                       teachers?.map((teacher) => (
                       
                           <Row key={teacher?._id} teacher={teacher}/>
                            
                          )
                       )
                    }

                   
                    </tbody>
                </table>
                </div>
            </div>
            </section>



        </div>
    )
}

export default Table
