import React, { useState } from 'react'
import Pesonal from '../components/Pesonal'
import Social from '../components/Social';
import Education from '../components/Education';

const Signup = ({getScholarships}) => {
const [currentForm, setcurrentForm] = useState("Personal");
const [datails, setdatails] = useState({"name":"","dob":"","state":"","field":"","out":"","email":"","phone":"","gender":"","caste":"","exmen":"","disable":"","sports":"","percentage":"","qualification":"","income":"","year":"","iname":""});
const [formNum,setformnum] = useState({"1":{"b":"#207CFF","c":"white"},"2":{"b":"#DED7D78C","c":"#000000AD"},"3":{"b":"#DED7D78C","c":"#000000AD"}})
const onChange=(e)=>{
    setdatails({...datails,[e.target.name]:e.target.value})
}
const formmTypes = {"Personal":<Pesonal setcurrentForm={setcurrentForm} onChange = {onChange} details={datails} setnum={setformnum}/>,"Social":<Social details={datails} onChange = {onChange} setcurrentForm={setcurrentForm} setnum={setformnum}/>,"Education":<Education details={datails} getScholarships={getScholarships} onChange = {onChange} setcurrentForm={setcurrentForm} setnum={setformnum}/>}
  return (
    <div className='h-screen bg-no-repeat flex bg-cover justify-center items-center' style={{backgroundImage:"url(/images/signupbg.svg)"}}>
        <div className='w-[56rem] h-[36rem] bg-white rounded-2xl mt-15 '>
            <div className='mt-10 mx-auto flex justify-center'>
                <div>
                <div className='text-center text-[1.1rem] font-semibold'>
                Sign up for Scholarship Finder
                </div>
                <div className='mt-6 gap-4 flex items-center'>
                    <div>
                    <div className='text-[1.1rem]  w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center' style={{backgroundColor:formNum["1"].b,color:formNum["1"].c}}>
                        <div>1</div>
                    </div>
                    </div>
                    <hr className='h-[0.15rem] bg-gray-400 border-gray-400 w-[9rem]'/>
                    <div>
                    <div className='text-[1.1rem]  w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center' style={{backgroundColor:formNum["2"].b,color:formNum["2"].c}}>
                        <div>2</div>
                    </div>
                    </div>
                    <hr className='h-[0.15rem] bg-gray-400 border-gray-400 w-[9rem]'/>
                    <div>
                    <div className=' text-[1.1rem]  w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center' style={{backgroundColor:formNum["3"].b,color:formNum["3"].c}}>
                        <div>3</div>
                    </div>
                    </div>
                </div>
                <div className='text-[0.75rem] mt-4 font-bold gap-[5rem] flex mx-auto absolute '>
                <div className=''>
                Personal Details
                </div>
                <div>
                Social and Physical Details
                </div>
                <div>
                Education Details                    
                </div>
            </div>
                </div>
                <div>
            </div>
            </div>
            {formmTypes[currentForm]}
        </div>
    </div>
  )
}

export default Signup