import { useState } from "react";
import {
  
  MenuIcon,
  XIcon
} from "@heroicons/react/solid"
import Router from 'next/router';



export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <nav
        className= "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
        
      >
        
        
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className= "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#"
            >
              UMIS
            </a>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? ( <MenuIcon className="h-10 sm:hidden cursor-pointer px-3 py-2 bg-blue-400 rounded-xl"/>) : (
                  <XIcon className="h-10 sm:hidden cursor-pointer px-3 py-2 bg-blue-400 rounded-xl"/>
              )}

            </button>
          </div>


          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i
                    className= "lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                    
                  />{" "}
                  About
                </a>
              </li>
            </ul>


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i
                    className= "lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

  
              <li className="flex items-center">
                <a
                className= "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
                >
                  <i
                    className= "lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

  
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text--300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#pablo"
                >
                  <i
                    className= "lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

  
              

              <li className="flex items-center">
                <button
                  className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  type="button"
                  onClick={() => Router.push("/pricing")}
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i>Admin SignUp
                </button>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    );
  }