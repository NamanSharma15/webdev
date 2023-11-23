import React, { useEffect } from 'react'

const Pesonal = ({setcurrentForm,setnum,details,onChange}) => {
  useEffect(()=>{
    setnum({"1":{"b":"#207CFF","c":"white"},"2":{"b":"#DED7D78C","c":"#000000AD"},"3":{"b":"#DED7D78C","c":"#000000AD"}})
  },[])
  return (
    <div className='ml-12'>
    <div className='text-[1.125rem] font-semibold mt-16  ml-20'>
    <div>
    Personal Details
    </div>
    </div>
    <div className='flex justify-center'>                    
    <div id="form" className=' mt-4 '>
        <div className='flex gap-[5rem]'>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Full Name
        </div>
        <input type="text" name="name" value={details.name} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]' placeholder='Enter your Name'/>
        </div>
        <div className='flex justify-center w-[15rem] cursor-pointer'>
        <img src="/images/profile_input.svg" alt="" onClick={()=>{document.getElementById("fileInput").click()}}/>
        <input type='file' className='hidden' id='fileInput'/>
        </div>
        </div>
        <div className='flex gap-[5rem] mt-4'>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Email
        </div>
        <input type="email" name='email' value={details.email} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]' placeholder='Enter your Email Address'/>
        </div>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Phone
        </div>
        <input type="phone" name='phone' value={details.phone} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]' placeholder='Enter your Phone No.'/>
        </div>
        </div>
        <div className='flex gap-[5rem] mt-4'>
        <div className=' mr-3'>
        <div className='text-[0.9rem] font-bold ml-3'>
       Gender
        </div>
        <div className='flex gap-6 ml-4 mt-4'>
        <div className='flex gap-1 items-center'>
        <input type="radio" value="Male" onChange={onChange} name="gender"  className='w-[2rem] h-[2rem] mx-0'/>
        <label htmlFor="male">Male</label>
        </div>
        <div className='flex gap-1 items-center'>
        <input type="radio" value="Female" onChange={onChange} name="gender"  className='w-[2rem] h-[2rem] mx-0'/>
        <label htmlFor="female">Female</label>
        </div>
        <div className='flex gap-1 items-center'>
        <input type="radio" value="Others" onChange={onChange} name="gender"  className='w-[2rem] h-[2rem] mx-0'/>
        <label htmlFor="others">Others</label>
        </div>
        </div>
        </div>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
       Date Of Birth
        </div>
        <input type="date" name="dob" value={details.dob} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]' placeholder='MM/DD/YYYY'/>
        </div>
        </div>
    </div>
    </div>
    <div className='flex justify-center'>
    <button className='text-center px-[1rem] text-[0.9rem] font-semibold text-white rounded-2xl mt-[1.7rem] bg-[#2AC2FF] h-[2.1rem] ' 
    onClick={()=>{console.log(details);setcurrentForm("Social")}}
    >Save and Continue</button>

    </div>
</div>
  )
}

export default Pesonal