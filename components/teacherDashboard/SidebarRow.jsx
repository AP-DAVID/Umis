import Image from 'next/image'
import Router, { useRouter } from "next/router";
import {signOut} from "next-auth/client";


function SidebarRow({active, src, Icon, title, srcTitle, setReveal}) {


    const router = useRouter();


    const switchScenes = async() => {



        if(title === "Dashboard"){
           setReveal(1)
        }
        else if(title === "Groups"){
            setReveal(2)
         }

        else if(title === "Announcement"){
            Router.push("/announce")
        }

        else if(title === "Subjects"){
            setReveal(3)
        }
        else if(title === "Chat"){
             Router.push("/chat")
        }
        else if(title === "Settings"){
            setReveal(5)
        }
        else if(title === "Results"){
             setReveal(6)
        }
        else if(srcTitle === "Admin"){
            return
        }
        else if(title === "Log Out"){
            await signOut();
            await router.replace(router.asPath);
         }
        else {
            setReveal(7)
        }
 







    }
    return (
        <div onClick={switchScenes} className="flex items-center left-0 -ml-0.5 md:ml-2 md:space-x-2 p-2 md-p-4 hover:bg-gray-200 rounded-xl cursor-pointer group" >


            {
                src && (

                  <div className="flex space-x-3 mb-9">
                        <Image 
                        className="rounded-full"
                        src={src}
                        width={30}
                        height={30}
                        layout="fixed"
                        className="text-yellow-500"
                        
                        />

                        <p className="hidden sm:inline-flex font-medium text-blue-500"> {srcTitle} </p>

                  </div>
                )
            }

            <div  className= {(active ? "bg-yellow-500 w-full flex space-x-3 py-2 px-4 rounded-xl" : "w-full flex space-x-3 py-2 px-2 rounded-xl" )}>

            {
                Icon && (
                    <Icon className="h-6 w-6 md:h-8 md:w-8 group-hover:animate-bounce text-gray-500"/>
                )
            }
            <p className="hidden  sm:inline-flex font-medium"> {title} </p>
            
            </div>
        </div>
    )
}

export default SidebarRow

// flex space-x-3 py-2 px-2 bg-red-400 rounded-xl
// className={
//     (props.transparent
//       ? "top-0 absolute z-50 w-full"
//       : "relative shadow-lg bg-white shadow-lg") +
//     " flex flex-wrap items-center justify-between px-2 py-3 "
//   }
