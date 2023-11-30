import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
const Navbar = () => {
    const services= { "University Shortlisting": "/search",  "Scholarship Finder": "/scholarship-signup","Career Counselling": "https://www.ncs.gov.in/"}
    return(
        <nav className=''>
            <div className='flex bg-white h-[5.2rem] align-middle '>
                <img src="/images/logo.svg" alt=""  className='scale-[0.8] mb-2'/>
                <div className='mx-auto'>
                    <ul className='flex gap-12 mt-[1.9rem] text-[1.1rem]'>
                    <li className='font-semibold text-[#232C6D] '> <a href="/">Home</a></li>
                    <li className=''><a href="/about">About</a></li>
                    <li>
                    <a
      className="flex items-center "
    >
      <a onClick={()=>{document.getElementById("dropdownNavbar1").classList.toggle("hidden");document.getElementById("servicesButton").classList.toggle("text-green-500")}}  className=""  id="servicesButton">
      Tools{" "}
      </a>
      <svg
        className="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
        onClick={()=>{document.getElementById("dropdownNavbar1").classList.toggle("hidden");document.getElementById("servicesButton").classList.toggle("text-green-500")}}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 4 4 4-4"
        />
      </svg>
    </a>
    {/* Dropdown menu */}
    <div
      id="dropdownNavbar1"
      className="z-10 hidden absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
    >
      <ul
        className="py-2 text-sm text-gray-700 "
        aria-labelledby="dropdownLargeButton"
      >
        {Object.keys(services).map((item)=>{return(
        <li>
          <a
            href={services[item]}
            className="block px-4 py-2 hover:bg-gray-100 "
          >
            {item}
          </a>
        </li>
)})}
      </ul>
    </div> 
                    </li>
                        <a href="/contact"><li className=''>Contact</li></a>
                    </ul>
                </div>
                <div className='flex mr-[10rem]'>
                    <img src="/images/search.svg" alt="" className='scale-[0.25] mt-[0.2rem]'/>
                    <a  type="text" className='border-0 pt-7 text-gray-500 cursor-pointer outline-none text-[1.1rem] mt-[0.2rem] w-[5rem]' href='/search'>Search</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar