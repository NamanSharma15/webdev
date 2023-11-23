import React from 'react'

const Review = ({data}) => {
  return (
    <div className='bg-white rounded-lg w-[18rem] h-[18rem] ml-10'
    style={{"boxShadow":" 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <div className='flex pt-6 pb-4 px-6 gap-5'>
            <img src={`/images/${data.img}.png`} className='rounded-full w-14 h-14' alt="" />
            <div>
                <div className='text-[1.125rem] font-medium'>{data.name}</div>
                <div className='text-[1rem] font-medium text-[#5B4B4B]'>{data.title}</div>
            </div>
        </div>
        <div className='w-[16rem] pl-6 text-justify text-[1rem] font-medium text-[#000000a9]'>
            <p>
            {data.text}
            </p>
        </div>
    </div>
  )
}

export default Review