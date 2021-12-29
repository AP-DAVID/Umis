import Image from "next/image"
import { useRouter } from 'next/router'
function ConfirmModal({setShowModa, text1, own}) {
    const router = useRouter()
    return (
        <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {text1}
                </h3>
                
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  <Image src="/bear.svg" height ={70} width={70} className="hover:animate-bounce " />
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={
                      () => {
                        
                        own ? router.push('/announce') :setShowModa(false);


                      
                      
                           // close modal here  
                    }
                        
                    }
                >
                  Close
                </button>
                
              </div>
            </div>

            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>


    )
}

export default ConfirmModal