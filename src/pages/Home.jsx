import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Review from '../components/Review';
import Footer from '../components/Footer';
const Home = () => {
  const [color, setcolor] = useState({"back":"black","forward":"black"});
    let cards = [
      {"title":"University Listing",
        "img":"tool1",
        "text":"Over 1000 different types of Univeristies",
        "link":""},
      {"title":"Scholarship Finder",
        "img":"tool2",
        "text":"Over 7 different types of Scholarships",
        "link":"/scholarship-signup"},
      {"title":"Resume Builder",
        "img":"tool3",
        "text":"Build Resume with 10 templates",
        "link":""},
      {"title":"Course Suggestions",
        "img":"tool4",
        "text":"Find the best courses and learn new skills",
        "link":""},
      {"title":"Test Suggestions",
        "img":"tool5",
        "text":"Test your knowledge and skills",
        "link":""},
      {"title":"Career Counselling",
        "img":"tool6",
        "text":"Get help from our counsellers",
        "link":""}
    ]
    let reviews = [
      {"name":"James Hook",
      "title":"Teacher",
      "text":"ClassCrafter is a fantastic tool for finding universities, courses, tests, and scholarships. It streamlines the entire process, making it incredibly convenient for students. Highly recommended!",
    "img":"profile1"},
      {"name":"Emma Williams",
      "title":"Student",
      "text":"It is a game-changer for students. It's a one-stop destination for universities, courses, tests, and scholarships. Streamlined and efficient, it's a must-visit!",
    "img":"profile2"},
      {"name":"David Clark",
      "title":"Student",
      "text":"This educational site impresses with its user-friendly interface, rich content, engaging materials, diverse subjects, accessibility, and supportive community. A fantastic resource for learning.",
    "img":"profile3"}
    ]
    return (
    <>
      <div className='h-[24.625rem] text-white flex items-center bg-no-repeat bg-cover' style={{backgroundImage:"url(/images/background_home.jpg)"}}>       
        <div className='text-[2.1rem] font-semibold ml-20'>
        <p>  
        Looking for a Life <br />
        Changing  Opportunity
        </p>
        <button className='text-center px-[1rem] text-[1.1rem] text-white rounded-2xl mt-[1.7rem] bg-[#D49256] h-[2.1rem] '>Get Started</button>
        </div>
        <div className='mr-[17rem] ml-auto flex mb-6'>
          <img src="/images/image1.svg" className='ml-8' alt="" />
          <img src="/images/image2.svg" className='absolute mt-8' alt="" />
        </div>
      </div>
      <div className='mt-9'>
      <div className='w-screen justify-center text-center'>
        <div className='font-bold text-[1.6rem] text-[#334784]'>What We Can Do For You</div>
        <div className='font-semibold text-[0.875rem] text-[#3F3939] mt-2'>
        Starting with scholarship finding, university search and test suggestion
        <br />
        that embraces your skills and provides opportunities
        </div>
      </div>
      <div className='mt-16 gap-20 justify-center flex'>
      <Card data={cards[0]}/>
      <Card data={cards[1]}/>
      <Card data={cards[2]}/>
      </div>
      <div className='mt-8 gap-20 justify-center flex'>
      <Card data={cards[3]}/>
      <Card data={cards[4]}/>
      <Card data={cards[5]}/>
      </div>
      </div>
      <div className='mt-12 flex mb-20'>
        <div className='flex justify-center ml-[10rem]'>
          <div className='mt-4 overflow-x-hidden'>
          <div className='text-[2.1rem] text-[#334784] font-bold w-[15rem]'>What People Think About Our Tools</div>
          <div className='font-semibold text-[0.875rem] text-[#3F3939] mt-2 w-[13rem]'>
          Read about other's opinion before trying it yourself
          </div>
          <div className='mt-10 flex gap-8'>
            <button className='rounded-full w-[40px] h-[40px] flex items-center border-2  border-black justify-center hover:bg-[#9D90EB] hover:border-0' onMouseEnter={()=>{setcolor({...color,["back"]:"white"})}} onMouseLeave={()=>{setcolor({...color,["back"]:"black"})}}>
            <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.98 8.12C3.40133 7.42933 2.79467 6.832 2.16 6.328C1.544 5.80533 0.890667 5.376 0.2 5.04V3.836C1.58133 3.12667 2.84133 2.09067 3.98 0.727999H6.136C5.93067 1.26933 5.688 1.78267 5.408 2.268C5.14667 2.73467 4.86667 3.18267 4.568 3.612V5.264C4.86667 5.656 5.14667 6.09467 5.408 6.58C5.688 7.04667 5.93067 7.56 6.136 8.12H3.98ZM4.4 5.572L4.428 3.276H19.8V5.572H4.4Z" fill={color.back}/>
</svg>
            </button>
            <button className='rounded-full w-[40px] h-[40px] flex items-center border-2  border-black justify-center hover:bg-[#9D90EB] hover:border-0' onMouseEnter={()=>{setcolor({...color,["forward"]:"white"})}} onMouseLeave={()=>{setcolor({...color,["forward"]:"black"})}}>
            <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.836 8.12C14.0227 7.63467 14.228 7.18667 14.452 6.776C14.676 6.34667 14.928 5.94533 15.208 5.572H0.2V3.276H15.208C14.9467 2.90267 14.704 2.51067 14.48 2.1C14.256 1.67067 14.0507 1.21333 13.864 0.727999H15.992C17.1493 2.09067 18.4187 3.12667 19.8 3.836V5.04C18.4187 5.712 17.1493 6.73867 15.992 8.12H13.836Z" fill={color.forward}/>
</svg>

            </button>
          </div>
          </div>
          <div className='flex'>
            <div className='mt-4'>
              <div className='h-[2.2rem] bg-[#23CCE3] w-screen mt-6 mb-8'></div>
              <div className='h-[2.2rem] bg-[#566CD4] w-screen mt-6 mb-8'></div>
              <div className='h-[2.2rem] bg-[#E39623] w-screen mt-6 mb-8'></div>
            </div>
            <div className='flex absolute overflow-hidden ml-10'>
              <div className='flex'>
              <Review  data={reviews[0]}/>
              <Review data={reviews[1]}/>
              <Review data={reviews[2]}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 flex gap-20 scale-[0.8]'>
      <img src="/images/info.svg" alt="" />
      <div>
        <div className='text-[#334784] text-[2.2rem] font-bold'>
        <p>         
        Be a Part of Our <br />
        Great Community
        </p>
        </div>
        <div className='my-[0.5rem]  font-semibold text-[1.5rem]'>
        Join our community to empower your educational journey:
        </div>
        <div className='text-[1.25rem] font-medium'>
         
        <li>Access a treasure trove of educational materials.</li>
        <li>Unlock funding for your dreams.</li>
        <li>Connect with peers and mentors.</li>
        <li>Navigate your academic path effectively.</li>
        <li>Foster a commitment to continuous education.</li>
        </div>
      </div>
      </div>
      <Footer/>
    </>
    )
}

export default Home