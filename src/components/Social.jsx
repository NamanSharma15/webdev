import React, { useEffect } from 'react'

const Social = ({setcurrentForm,setnum,details,onChange}) => {
let caste = ["Select your Caste","General","Minority","SC/ST","OBC"]
let income = ["Select the Annual Income","Upto 1.5L","1.5L to 3L","3L to 6L","Above 6L"]
let state = [ "Select your State","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
useEffect(()=>{
    setnum({"1":{"b":"#DED7D78C","c":"#000000AD"},"2":{"b":"#207CFF","c":"white"},"3":{"b":"#DED7D78C","c":"#000000AD"}})
  },[])
    return (
        <div className='ml-12'>
        <div className='text-[1.125rem] font-semibold mt-16  ml-20'>
        <div>
        Social and Physical Details
        </div>
        </div>
        <div className='flex justify-center'>                    
        <div id="form" className=' mt-4 '>
            <div className='flex gap-[5rem]'>
            <div>
            <div className='text-[0.9rem] font-bold ml-3'>
            Caste
            </div>
            <select name='caste' value={details.caste} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
                {caste.map((item)=><option value={item}>- {item} -</option>)}
            </select>
            </div>
            <div>
            <div className='text-[0.9rem] font-bold ml-3'>
            Annual Income
            </div>
            <select name='income' value={details.income} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
                {income.map((item,index)=><option value={item}>- {item} -</option>)}
            </select>
            </div>
            </div>
            <div className='flex gap-[5rem] mt-4'>
            <div className=' mr-[10.25rem]'>
            <div className='text-[0.9rem] font-bold ml-3'>
            Exservice Men
            </div>
            <div className='flex gap-6 ml-4 mt-4'>
            <div className='flex gap-1 items-center'>
            <input type="radio" onChange={onChange} value="Yes" name="exmen" className='w-[2rem] h-[2rem] mx-0'/>
            <label htmlFor="male">Yes</label>
            </div>
            <div className='flex gap-1 items-center'>
            <input type="radio" onChange={onChange} value="No" name="exmen" className='w-[2rem] h-[2rem] mx-0'/>
            <label htmlFor="female">No</label>
            </div>
            </div>
            </div>
            <div className=' mr-[10.25rem]'>
            <div className='text-[0.9rem] font-bold ml-3'>
            Physical Disablity
            </div>
            <div className='flex gap-6 ml-4 mt-4'>
            <div className='flex gap-1 items-center'>
            <input type="radio" onChange={onChange} value="Yes" name="disable" className='w-[2rem] h-[2rem] mx-0'/>
            <label htmlFor="male">Yes</label>
            </div>
            <div className='flex gap-1 items-center'>
            <input type="radio" onChange={onChange} value="No" name="disable" className='w-[2rem] h-[2rem] mx-0'/>
            <label htmlFor="female">No</label>
            </div>
            </div>
            </div>
            </div>
            <div className='flex gap-[5rem] mt-4'>
            <div>
            <div className='text-[0.9rem] font-bold ml-3'>
            State
            </div>
            <select onChange={onChange} name='state' className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
                {state.map((item,index)=><option value={item}>- {item} -</option>)}
            </select>
            </div>
            <div className=' mr-[10.25rem]'>
            <div className='text-[0.9rem] font-bold ml-3'>
            Outside India
            </div>
            <div className='flex gap-6 ml-4 mt-4'>
            <div className='flex gap-1 items-center'>
            <input type="radio" onChange={onChange} value="In" name="out" className='w-[2rem] h-[2rem] mx-0'/>
            <label htmlFor="male">Yes</label>
            </div>
            <div className='flex gap-1 items-center'>
            <input type="radio" onChange={onChange} value="Out" name="out" className='w-[2rem] h-[2rem] mx-0'/>
            <label htmlFor="female">No</label>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className='flex'>
        <div className='absolute ml-16'>
        <button className='text-center px-[1rem] text-[0.9rem] font-semibold text-white rounded-2xl mt-[1.6rem] bg-[#D49256] h-[2.1rem] ' 
        onClick={()=>{setcurrentForm("Personal")}}
        >Back</button>
        </div>
        <div className='flex justify-center mx-auto'>
        <button className='text-center px-[1rem] text-[0.9rem] font-semibold text-white rounded-2xl mt-[1.7rem] bg-[#2AC2FF] h-[2.1rem] ' 
        onClick={()=>{console.log(details);setcurrentForm("Education")}}
        >Save and Continue</button>
        </div>
        </div>
    </div>
  )
}

export default Social