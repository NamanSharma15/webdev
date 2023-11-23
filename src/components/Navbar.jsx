import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
const Navbar = () => {
    return(
        <nav className=''>
            <div className='flex bg-white h-[5.2rem] align-middle '>
                <img src="/images/logo.svg" alt=""  className='scale-[0.8] mb-2'/>
                <div className='mx-auto'>
                    <ul className='flex gap-12 mt-[1.9rem] text-[1.1rem]'>
                        <a href="/"><li className='font-semibold text-[#232C6D] '>Home</li></a>
                        <a href=""><li className=''>About</li></a>
                        <a href=""><li className=''>Tools</li></a>
                        <a href=""><li className=''>Contact</li></a>
                    </ul>
                </div>
                <div className='flex mr-[10rem]'>
                    <img src="/images/search.svg" alt="" className='scale-[0.25] mt-[0.2rem]'/>
                    <input type="text" className='border-0 outline-none text-[1.1rem] mt-[0.2rem] w-[5rem]' placeholder='Search' />
                    <button className='text-center ml-5 px-[1rem] text-[1.1rem] text-white rounded-2xl mt-[1.7rem] bg-[#566CD4] shadow-lg shadow-slate-300 h-[1.9rem] '>Log in</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar