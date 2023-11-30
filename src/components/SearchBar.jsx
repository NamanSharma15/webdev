import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
import Card from '../components/Card'
import Footer from './Footer';
const SearchBar = () => {
    const [searchData, setsearchData] = useState([]);
    const [searchData1, setsearchData1] = useState([]);
    const [searchK, setsearchK] = useState("");
    const hist = useNavigate();
    let cards = [
        {"title":"University Listing",
          "img":"tool1",
          "text":"Over 1000 different types of Univeristies",
          "link":"/search"},
        {"title":"Scholarship Finder",
          "img":"tool2",
          "text":"Over 7 different types of Scholarships",
          "link":"/scholarship-signup"},
        {"title":"Career Counselling",
          "img":"tool6",
          "text":"Get help from our counsellers",
          "link":"https://www.ncs.gov.in/"}
      ]
    const getList= async()=>{
        const response = await fetch(`http://localhost:3050/universityList`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
          ).then((res) => res.json()).then((res) => {setsearchData(res.List);setsearchData1(res.List);})
    }
    useEffect(() => {
        getList();
    }, []);
    const fileterD = ()=>{
        setsearchData(searchData1.filter((el)=>el.toLowerCase().includes(searchK.toLowerCase())))
    }
    let onChange=(e)=>{
        setsearchK(e.target.value)
    }
    const onClick1 =()=>{
        hist(`/university/${searchK}`)
        window.location.reload();
    }
    return(
        <div className='' >
        <div className='flex items-center justify-center h-[28rem] bg-no-repeat bg-cover' style={{"backgroundImage":"url(/images/univbg.jpg)"}}>
    <div className='flex pt-10   rounded-lg w-[60vw] items-center'>
    <div className='flex justify-center pr-10 w-full'>
    <div className='pb-[15rem]'>
    <img src="/images/logo.svg" alt=""  className='scale-[1.3] mb-10 mx-auto'/>
    <div className='bg-white  pl-6  rounded-3xl flex  mt-2 h-[2.5rem] '>
    <AutoComplete suggestions={searchData} size={25} className='input w-[90%]  bg-white focus:outline-none' inputClassName='border-0 bg-white w-[25rem] focus:outline-none' placeholder='Search for University' value={searchK} completeMethod={fileterD} onChange={onChange}/>
    <button className='bg-blue-500 px-10 rounded-3xl' onClick={onClick1}>    
    <i className='fas fa-search text-white text-lg mt-1 cursor-pointer'></i>
    </button>
    </div>
  </div>
        </div>
    </div>
    </div>
    <div className='flex items-center justify-center' style={{"backgroundImage":"url(/images/univbg.jpg)"}}>
    <div className='flex justify-center gap-20 h-[22.8rem] rounded-md w-[70vw] mb-5 py-8 bg-gradient-to-r from-blue-400 to-emerald-400'>
    <div className='mt-4 overflow-x-hidden'>
          <div className='text-[2.1rem] text-[white] font-bold w-[15rem]'>Try our Other Tools and Services</div>
          <div className='font-semibold text-[0.875rem] text-[#3F3939] mt-2 w-[13rem]'>
          They will help you to get in your desired instiution
          </div>

          </div>
    <div className='bg-white rounded-lg'><Card data={cards[1]}/></div>
      <div className='bg-white rounded-lg'><Card data={cards[2]}/></div>
    </div>
    </div>
    <Footer/>
        </div>
        )
}

export default SearchBar