function Table({data}) {
    return (
        <div>
            <table className="mt-10 table-auto border-separate h-screen w-full border-t border-b ease-in transform border-gray-400 ">
                    <thead className="">
                        <tr className="bg-gray-100 h-12">
                            <th className="border-b border-gray-200 font-medium">Details</th>
                            <th className="border-b border-gray-200 font-medium">Data</th>
                            
                        </tr>
                    </thead>
                    <tbody className="items-center text-center">
                        <tr >
                            <td className="border-b border-gray-200 font-light" >Name</td>
                            <td className="border-b border-gray-200 font-light">{data?.firstname} - {data?.lastname}</td>
                          
                        </tr>
                        <tr class="bg-emerald-200">
                            <td className="border-b border-gray-200 font-light">class</td>
                            <td className="border-b border-gray-200 font-light">{data?.class[0]?.classname}</td>
                      
                        </tr>
                        <tr class="bg-emerald-200">
                            <td className="border-b border-gray-200 font-light">Religion</td>
                            <td className="border-b border-gray-200 font-light">Christainity</td>
                      
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 font-light">Sex</td>
                            <td className="border-b border-gray-200 font-light">M</td>
                         
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 font-light">Status</td>
                            <td className="border-b border-gray-200 font-light">{data?.status}</td>
                         
                        </tr>
                        
                        <tr>
                            <td className="border-b border-gray-200 font-light">Age</td>
                            <td className="border-b border-gray-200 font-light">{data?.age}</td>
                         
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 font-light">Height</td>
                            <td className="border-b border-gray-200 font-light">3'1</td>
                         
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 font-light">Weight</td>
                            <td className="border-b border-gray-200 font-light">650lbs</td>
                         
                        </tr>
                        <tr class="bg-emerald-200">
                            <td className="border-b border-gray-200 font-light">Country</td>
                            <td className="border-b border-gray-200 font-light">{data?.country}</td>
                      
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 font-light">Email</td>
                            <td className="border-b border-gray-200 font-light">{data?.email}</td>
                         
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 font-light">Address</td>
                            <td className="border-b border-gray-200 font-light">Winners Liberation Estate</td>
                         
                        </tr>
                        
                    </tbody>
            </table>
        </div>
    )
}

export default Table
