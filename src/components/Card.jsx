import React from 'react'

const Card = ({data}) => {
  return (
    <div className='flex justify-center w-[17.5rem] pb-10 rounded-lg text-center mb-10 hover:transition delay-75 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] '>
      <div>
        <img src={`/images/${data.img}.svg`} className='scale-[0.8] mx-auto' alt="" />
        <div className='text-[1.3rem] font-semibold text-[#334784]'>{data.title.split(" ")[0]} <br /> {data.title.split(" ")[1]}</div>
        <div className='text-[0.875rem] font-semibold mt-[0.6rem] w-[10rem]'>{data.text}</div>
        <div className='text-[0.875rem] font-bold mt-[2rem] text-[#263377] hover:underline'><a href={data.link}>Try now {">"}</a></div>
      </div>
    </div>
  )
}

export default Card