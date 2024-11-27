"use client"
import React from 'react'
import Link from 'next/link'
 
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';






const Hero = () => {
  return (

    <div className=' flex  bg-black w-full h-screen  '>
  <div className=" text-white font-serif font-bold text-5xl">
    
    <div className='flex mt-24 px-16 '>
      <p className='font-serif font-bold animate-pulse flex space-x-4  shadow-teal-500/50  '>Hey! it&apos;s </p> 
    <p className='text-teal-200 font-serif font-bold mx-2  shadow-teal-500/50 shadow-lg '>Wania</p>
    </div>
   <div className='text-white font-serif text-xs mt-3 flex px-16 '>
   <span style={{ color: 'white',fontSize: '2em' }}>I&apos;m </span>
   <span style={{ fontSize: '2em', color: 'teal', marginRight: '10px' }}> </span>
    <TypeAnimation
      sequence={[
        
        " Frontend Developer",
        1000, 
        " Graphic Designer",
        1000,
        " Logo Designer",
        1000,
        "MS Office Expert",
        1000
      ]}
      wrapper="span"
      speed={50}
       className="text-teal-200"
      style={{ fontSize: '2em', display: 'inline-block ',  textDecorationColor:'red' }}
      repeat={Infinity}
    />
   
   
    
   </div>
   
  
      
   
  <div className='text-left px-16 text-sm font-normal  mt-5 '>

     <p>I am a skilled graphic designer(canva designer) and frontend web developer I have also experience in office automation and can efficiently utilize these skills to create visual apealing designs and web applications</p>
     </div>
     <div className="flex gap-3 mt-3 mx-14 px-2 
     ">
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/syeda-wania-8a183729a/" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform 
    hover:-translate-y-1 hover:scale-110 '>
        <div className="w-8 h-8 bg-transparent border-2 border-white flex items-center justify-center rounded-full p-4  transition duration-300">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <FaLinkedin className="text-teal-200 text-xl" />
          </div>
        </div>
      </a>

      {/* Instagram Icon */}
      <a href="https://www.instagram.com/apnacollegebywania/?hl=en" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform 
    hover:-translate-y-1 hover:scale-110 '>
        <div className="w-8 h-8 bg-transparent border-2 border-white flex items-center justify-center rounded-full p-4  transition duration-300">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <FaInstagram className="text-teal-200 text-xl" />
          </div>
        </div>
      </a>

      {/* YouTube Icon */}
      <a href="https://www.youtube.com/@LifeWithWaniaa" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform 
    hover:-translate-y-1 hover:scale-110 '>
        <div className="w-8 h-8 bg-transparent border-2 border-white flex items-center justify-center rounded-full p-4  transition duration-300">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <FaYoutube className="text-teal-200 text-xl" />
          </div>
        </div>
      </a>
    </div>
   
   
     <div>
  <Link href="/contact" className='border border-teal-200 rounded-full text-center  text-sm  text-teal-200 font-normal-bold h-24 py-2 w-28 px-6 mx-16 hover:shadow-lg
    shadow-teal-500/50   shadow-lg  hover:bg-black hover:text-white  transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-110 p-1 '>Contact
 </Link>
  
  </div>
        </div>
        
      
  <div className='flex justify-center '><Image
   src="/not_bzns.jpg"
   alt="" 
   height={200}
   width={200}
   className='rounded-full h-80 w-80 mx-72 mt-14  shadow-teal-500/50   shadow-xl  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 
                        p-1  ' /></div>
  

 
</div>

  )
}

export default Hero
