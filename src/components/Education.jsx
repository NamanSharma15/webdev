import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
const Education = ({setcurrentForm,setnum,details,onChange,getScholarships}) => {
    const hist = useNavigate();
    let years = Array.from({length: 2027 - 1979 + 1}, (_, a) => a + 1979);
    years[0] = "Select your Graduation Year"
    let annual = ["Select the Pecentage Range","90-100","80-90","70-80","60-70","Less the 60"]
    let qualification = ["Select your Qualification","Undergraduate","Postgraduate","Doctrate"]
    let intrest = ["Select your Intrests","Engineering" ,"Archaeology" ,"Mathematics" ,"Agriculture" ,"Biology" ,"Anthropology" ,"Economics" ,"Political science" ,"Biomedical Sciences"]
    useEffect(()=>{
        setnum({"1":{"b":"#DED7D78C","c":"#000000AD"},"2":{"b":"#DED7D78C","c":"#000000AD"},"3":{"b":"#207CFF","c":"white"}})
      },[])
  return (
    <div className='ml-12'>
    <div className='text-[1.125rem] font-semibold mt-16  ml-20'>
    <div>
   Educational Details
    </div>
    </div>
    <div className='flex justify-center'>                    
    <div id="form" className=' mt-4 '>
        <div className='flex gap-[5rem]'>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Education Qualification
        </div>
        <select name='qualification' value={details.qualification} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
            {qualification.map((item)=><option value={item}>- {item} -</option>)}
        </select>
        </div>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Percentage Range
        </div>
        <select name='percentage' value={details.percentage} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
            {annual.map((item)=><option value={item}>- {item} -</option>)}
        </select>
        </div>
        </div>
        <div className='flex gap-[5rem] mt-4'>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Intrests
        </div>
        <select name='qualification' value={details.qualification} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
            {intrest.map((item)=><option value={item}>- {item} -</option>)}
        </select>
        </div>
        <div className=' mr-[10.25rem]'>
        <div className='text-[0.9rem] font-bold ml-3'>
        Sports Quota
        </div>
        <div className='flex gap-6 ml-4 mt-4'>
        <div className='flex gap-1 items-center'>
        <input type="radio" onChange={onChange} value="Yes" name="sports" className='w-[2rem] h-[2rem] mx-0'/>
        <label htmlFor="male">Yes</label>
        </div>
        <div className='flex gap-1 items-center'>
        <input type="radio" onChange={onChange} value="No" name="sports" className='w-[2rem] h-[2rem] mx-0'/>
        <label htmlFor="female">No</label>
        </div>
        </div>
        </div>
        </div>
        <div className='flex gap-[5rem] mt-4'>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Gradution Year
        </div>
        <select name='year' value={details.year} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]'>
            {years.map((item)=><option value={item}>- {item} -</option>)}
        </select>
        </div>
        <div>
        <div className='text-[0.9rem] font-bold ml-3'>
        Institution Name
        </div>
        <input type="text" name='iname' value={details.iname} onChange={onChange} className='px-4 mt-3 text-[0.8rem] font-semibold rounded-3xl w-[19.9375rem] focus:bg-white focus:border border-[#C68E8E] py-2 outline-[#C68E8E] bg-[#F1F4F8]' placeholder='Enter your Institution Name'/>
        </div>
        </div>
    </div>
    </div>
    <div className='flex'>
    <div className='absolute ml-16'>
    <button className='text-center px-[1rem] text-[0.9rem] font-semibold text-white rounded-2xl mt-[1.6rem] bg-[#D49256] h-[2.1rem] ' 
    onClick={()=>{setcurrentForm("Social")}}
    >Back</button>
    </div>
    <div className='flex justify-center mx-auto'>
    <button className='text-center px-[1rem] text-[0.9rem] font-semibold text-white rounded-2xl mt-[1.7rem] bg-[#2AC2FF] h-[2.1rem] ' 
    onClick={async()=>{console.log(details);await getScholarships(details);hist("/scholarship-result")}}
    >Submit</button>
    </div>
    </div>
</div>
  )
}

export default Education