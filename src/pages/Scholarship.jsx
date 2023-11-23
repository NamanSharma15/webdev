import React, { useState } from 'react'
import SCDisplay from '../components/SCDisplay';
const Scholarship = () => {
    return(
    <div>
        <div className='h-[23.6875rem] bg-[#566CD4] w-screen absolute'>
        <div className='mt-10 text-center flex justify-center'>
            <div>
            <div className='text-[2.25rem] font-semibold text-white'>
        Scholarships Available for you
            </div>
            <div className='mt-2 text-[#ffffffa3] text-[1.375rem] w-[38.688rem]'>
            We have found some 3 scholarships you can you can apply 
            for according to the criterias
            </div>
            </div>
        </div>
        </div>
        <div className='absolute  mt-60 pb-20'>
            <div className='flex flex-wrap justify-center w-screen gap-20'>
            <SCDisplay/>
            <SCDisplay/>
            <SCDisplay/>
            </div>
        </div>
    </div>)
}

export default Scholarship