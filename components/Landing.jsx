import Navbar from "./Navbar"

function Landing() {
    return (
        <>
        <Navbar transparent />
        <main>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
              style={{
                minHeight: "75vh"
              }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1559838831-d8fbd8af6469?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJsYWNrJTIwcGVvcGxlJTIwaW4lMjBzY2hvb2x8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
                }}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-white font-semibold text-5xl">
                        Your story starts with us.
                      </h1>
                      <p className="mt-4 text-lg text-gray-300">
                        Your Personalized student Management System, Connect with your teachers and Students virtually
                      </p>
                    </div>
                  </div>
  
                </div>
            </div>

            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="c"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
            
          </div>
  
          <section className="pb-20 bg-gray-300 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">


                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer ease-in transform sm:hover:scale-105 hover:z-50">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-award"></i>
                      </div>
                      <h6 className="text-xl font-semibold">  Login as Teacher</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Connect with your Administrator, share resources and other valuable functionalities with your students now!, .
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="w-full md:w-4/12 px-4 text-center cursor-pointer ease-in transform sm:hover:scale-105 hover:z-50">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                        <i className="fas fa-retweet"></i>
                      </div>
                      <h6 className="text-xl font-semibold">
                        Login as Student
                      </h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Connect with your classmates and teachers via a dashboard!!
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer ease-in transform sm:hover:scale-105 hover:z-50">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                        <i className="fas fa-fingerprint"></i>
                      </div>
                      <h6 className="text-xl font-semibold">
                        Login as Admin
                      </h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Access to Crud functionality of the web management ecosystem between in the teachers, students and the Administrator
                      </p>
                    </div>
                  </div>
                </div>
              
              </div>
              </div>

        </section>

        </main>
        </>
    )
}

export default Landing
