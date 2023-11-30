import React, { useEffect } from 'react'
const SCDisplay = ({scholarship}) => {

    let d = {
        "INSPIRE Scholarship 2022-23 ? Scholarship for Higher Education (SHE)":"INSPIRE Scholarship (SHE)",
       "Abdul Kalam Technology Innovation National Fellowship":"AKTIN Fellowship",
       "AAI Sports Scholarship Scheme in India 2022-23":"AAI Scholarship",
       "Glow and lovely Career Foundation Scholarship":"GALC Scholarship",
       "National Fellowship for Persons with Disabilities":"NFP Fellowship",
       "ONGC Sports Scholarship Scheme 2022-23":"ONGC Scholarship",
       "Pragati Scholarship ? AICTE-Scholarship Scheme to Girl Child":"Pragati Scholarship",
       "Dr. Ambedkar post matric Scholarship":"APM Scholarship",
       "Indira Gandhi Scholarship for Single Girl Child UGC Scholarship for PG Programmes":"IGSFSG Scholarship",
       "National Overseas Scholarship Scheme 2021-22":"National Overseas Scholarship",
    }
    let moneytype = {
        "annual":"annum",
        "monthly":"month",
        "onetime":"overall"
    }
return (       <div className='w-[25.5rem] h-[36.9375rem] bg-white shadow-lg shadow-[#e4dbdb] rounded-lg'>
    <div className='justify-center flex pt-6 pb-3'>
        <div className='text-[#4B5C91] text-[1.25rem] font-semibold'>{d[scholarship.name]}</div>
    </div>
    <div className='w-[19.5rem] h-[9rem] text-[#292d31b5] text-[0.8rem] font-bold text-justify mx-auto'>
    {scholarship.description}
    </div>
    <div className='w-[19.5rem] text-[#292d31b5] text-[0.8rem] font-bold text-justify mx-auto mt-4'>
    <span className='text-black mr-1'>
    Applicable Fields:  
    </span>
    {scholarship.main_field}
    </div>
    <div className='w-[19.5rem] h-[14rem] text-[#292d31b5] text-[0.8rem] font-bold text-justify mx-auto mt-4'>
    <div className='text-black'>
    Eligiblity Crieteria: 
    </div>
    <div>{scholarship.eligiblity_criteria.split("\n").map((item)=>{return (    <div className='flex items-start'>
    <div className='text-[0.4rem] mt-[0.35rem] mr-2'>
    ⚫
    </div>
    <div>{item}</div>
    </div>)})}
    </div>
    </div>
    <div className='flex justify-center'>
        <div>
            <div className='flex'>
            <div className='text-[1.25rem] font-medium'>₹</div>
            <div className='text-[1.5rem] font-medium ml-1 mt-[0.07rem]'>{scholarship.scholarship_money} </div>
            <div className='text-[1.25rem] font-medium mt-[0.3rem] text-[#0000006e]'>/{moneytype[scholarship.type]}</div>
            </div>
            <button className='mt-3 px-10 text-white rounded-md font-medium py-1 bg-[#566CD4]' onClick={()=>{window.open(scholarship.application_link,"_blank")}}>Apply Now</button>
        </div>
    </div>
</div>)
}

export default SCDisplay