import { useState } from "react"
import Modal from "./Modal";




function Pricing() {
    

   const [showModal, setShowModal] = useState(false);
   const [amount, setAmount] = useState(0);


    return (
        <div className="min-h-screen py-9 sm:py-2 text-gray-800">
   
        <div className="container p-4 lg:p-8 mx-auto">
          <div className="text-center mt-4 lg:mt-8">
            <div className="text-sm text-indigo-600 uppercase font-semibold tracking-wider">
              Pricing Plans
            </div>
            <h2 className="text-3xl text-blue-500 md:text-4xl font-bold mb-7">
              Choose the best plan for you
            </h2>
            
          </div>
          
          <div className="grid grid-cols-1 items-stretch  place-items-center md:grid-cols-3 gap-4 lg:gap-1">
         
            <div className="rounded-2xl text-white cursor-pointer w-72 shadow-sm bg-purple-500 flex flex-col ">
              <div className="p-5 lg:p-6 text-white text-center flex-grow">
                <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-white bg-opacity-50 text-indigo-500 rounded-full mb-4">
                  Freelancer
                </span>
                <div>
                  <span className="text-3xl lg:text-5xl font-extrabold">₦80k</span>
                  <span className="text-lg  font-semibold">/mon</span>
                </div>
                <p className="">
                  Best plan for a lower budget
                </p>
              </div>
              <div className="p-5 lg:p-6 bg-purple-500 space-y-5 lg:space-y-6 text-white rounded-b-lg">
              <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center space-x-2">
                    <svg className="text-white w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Database Maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-white w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span className="line-through"><strong>Unlimited</strong> Maintenance </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-white w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Group Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-white w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span className="line-through"><strong>Unlimited</strong> Chat Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-white w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Other</strong> Functions</span>
                  </li>
                </ul>
                <a 
                   onClick={() => {

                    setAmount(8000000);
                    setShowModal(true)
                }} 
                   className="px-4 py-3 text-white text-center uppercase font-semibold rounded-2xl bg-gray-700 hover:bg-gray-900 block w-full" href="javascript:void(0)"
                >

                  Get Started
                </a>
              </div>
            </div>
        
            <div className="rounded-2xl cursor-pointer w-72  shadow-2xl bg-red-300 flex flex-col">
              <div className="p-5 lg:p-6 text-center flex-grow">
                <span className="inline-flex space-x-1 items-center text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                  <span>Agency</span>
                </span>
                <div>
                  <span className="text-3xl lg:text-5xl font-extrabold">₦250k</span>
                  <span className="text-lg text-gray-600 font-semibold">/6months</span>
                </div>
                <p className="text-gray-600">
                  Best plan for a medium budget
                </p>
              </div>
              <div className="p-5 lg:p-6 bg-red-300 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Database access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>3 months</strong> Maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Group Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Chat access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-yellow-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Other</strong> Functions</span>
                  </li>
                 
                </ul>
                <a onClick={() => {

                    setAmount(25000000);
                    setShowModal(true)
                }} 
                    className="px-4 py-3 text-white text-center uppercase font-semibold rounded-2xl bg-indigo-700 hover:bg-indigo-900 block w-full"
                    
                >
                  
                   Get Started
                </a>
              </div>
            </div>
           
            <div className="rounded-2xl cursor-pointer w-72 shadow-sm bg-blue-500 flex flex-col ">
              <div className="p-5 lg:p-6 text-center text-white flex-grow">
                <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-white bg-opacity-50 text-indigo-500 rounded-full mb-4">
                  Enterprise
                </span>
                <div>
                  <span className="text-3xl lg:text-5xl font-extrabold">₦400k</span>
                  <span className="text-lg  font-semibold">/mon</span>
                </div>
                <p >
                  Best plan for a higher budget
                </p>
              </div>
              <div className="p-5 lg:p-6 bg-blue-500 space-y-5 lg:space-y-6 text-white rounded-b-lg">
                <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center space-x-2">
                    <svg className="text-yellow-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                  </li>
                    <span><strong>Unlimited</strong> Database Maintenance</span>
                  <li className="flex items-center space-x-2">
                    <svg className="text-yellow-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Maintenance </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-yellow-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Group Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-yellow-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Unlimited</strong> Chat Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-yellow-500 w-5 h-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Other</strong> Functions</span>
                  </li>
                </ul>
                <a 
                    onClick={() => {

                      setAmount(40000000);
                      setShowModal(true)
                  }} 

                   className="px-4 py-3 text-white text-center uppercase font-semibold rounded-2xl bg-gray-700 hover:bg-gray-900 block w-full" href="javascript:void(0)"
                >
                  Get Started
                </a>
              </div>
            </div>
           
          </div>
        </div>


        {showModal && <Modal showModal={showModal} setShowModal={setShowModal} amount={amount}/>}
       
  
       
        <div className="text-gray-600 text-center mt-6 space-y-2 text-sm">
          <p className="font-semibold">
            Umis &copy; <script>document.write((new Date).getFullYear());</script>
          </p>
         
        </div>
      
      </div>
    )
}

export default Pricing
