function Table() {
    return (
        <div>
            

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
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="eager" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold text-black">Sonia</p>
                            <p className="text-xs text-gray-600">Chemistry teacher</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">22</td>
                        <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> active </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold text-black">Kunle</p>
                            <p className="text-xs text-gray-600">Biology</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">27</td>
                        <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Fired </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold">Nora</p>
                            <p className="text-xs text-gray-600">social studies</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">17</td>
                        <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Nnactive </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold">Ali</p>
                            <p className="text-xs text-gray-600">football</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">23</td>
                        <td className="px-4 py-3 border text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> active </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold">Khalid</p>
                            <p className="text-xs text-gray-600">head coach</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">20</td>
                        <td className="px-4 py-3 border text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Fired </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black rounded-lg hover:bg-green-500 hover:text-white cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold">Moji</p>
                            <p className="text-xs text-gray-600">PHE</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">29</td>
                        <td className="px-4 py-3 border text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> active </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black rounded-lg hover:bg-green-500 hover:text-white cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold">Mohammed</p>
                            <p className="text-xs text-gray-600">Physics</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">38</td>
                        <td className="px-4 py-3 border text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> active </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black rounded-lg hover:bg-green-500 hover:text-white cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                            <p className="font-semibold">Saad</p>
                            <p className="text-xs text-gray-600">SAD</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">19</td>
                        <td className="px-4 py-3 border text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> active </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black rounded-lg hover:bg-green-500 hover:text-white cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div> 
                            <p className="font-semibold">Samuel</p>
                            <p className="text-xs text-gray-600">Mermaid education</p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 border text-md font-semibold">21</td>
                        <td className="px-4 py-3 border text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> active </span>
                        </td>
                        <td className="flex px-4 py-3 items-center space-x-3 text-sm border">
                            <h1 className="text-sm ">6/12/2021</h1>

                            <button className="bg-blue-500 px-1 py-1 text-black rounded-lg hover:bg-green-500 hover:text-white cursor-pointer">Edit</button>

                            <button className="bg-blue-500 px-1 py-1 rounded-lg text-black hover:bg-green-500 hover:text-white cursor-pointer">Delete</button>

                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </section>



        </div>
    )
}

export default Table
