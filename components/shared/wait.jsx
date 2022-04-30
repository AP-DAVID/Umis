import React from "react";

import { ArrowCircleLeftIcon, ArrowLeftIcon } from "@heroicons/react/outline";

export default function Wait({ showWait }) {
  return (
    <>
      {showWait ? (
        <>
          <div className="justify-center text-green-100 items-center px-6 shadow-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-medium pl-16 font-semibold">
                    Please Wait
                  </h3>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                    </button> */}
                </div>
                {/*body*/}

                <div className="flex flex-col items-center space-y-6">
                  <div>
                    <ArrowLeftIcon className="h-10 w-10 animate-spin text-blue-500" />
                  </div>

                  <div>
                    <h1 className="font-mono text-base font-medium px-4 py-2">
                      Please wait, while we redirect you to the login page
                    </h1>
                  </div>
                </div>

                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                
                  
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
