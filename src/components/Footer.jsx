import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#E4D6D6] w-screen pt-8 flex px-[12rem] gap-[10rem] pb-10'>
        <div className=''>
            <img src="/images/logo.svg" className='scale-[1.2]'/>
            <div className='text-[1.2rem] mt-14 font-semibold'>
            Ultimate Destination For <br />
            All your Academic Needs 
            </div>
            <div className='text-[#000000ba] mt-8'>
            Copyright © 2023 ClassCrafter
            </div>
        </div>
        <div>
            <ul className='text-[1.1rem] leading-8 font-medium mt-9'>
            <a href=""><li>Home</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Services</li></a>
            <a href=""><li>Terms and Conditions</li></a>
            <a href=""><li>Privacy Policy</li></a>
            </ul>
        </div>
        <div>
            <ul className='text-[1.1rem] leading-8  mt-9'>
            <li className='text-[1.25rem] font-semibold'>Contact Us</li>
            <li className='font-semibold underline'>Sales Contact:</li>
            <li  className='font-medium'>8937-230-431</li>
            <li className='font-semibold underline'>Sales Email:</li>
            <li  className='font-medium'>ClassCrafter@cfu.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer