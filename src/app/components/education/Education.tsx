import React from 'react'

const Education = () => {
  return (
    <div className='bg-black min-h-screen '>
      <div className=''>
     <h1 className='font-extrabold text-white  mx-80 px-36
     text-5xl  shadow-teal-500/50   shadow-lg  '>
      <span className='text-teal-200 animate-pulse '>E</span>ducation</h1> 
     </div>
      <div className='   text-white   '>
       
       <div className='border border-teal-200 px-16  py-5 rounded-full  shadow-teal-500/50  shadow-xl w-1/2
        h-32  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-105 p-1 ml-9 mt-14   '>
        <h1 className='font-extrabold text-teal-200 flex justify-end'>High School</h1>
        <p className='text-left  text-sm  font-normal '>Matriculation from [Rose Land School] Completed secondary education with distinction,cultivating a passion for learning and laying the groundwork future success in higher education.</p>
        </div> 
        
        <div className='flex'>
<div className='border mt-40 ml-9   border-teal-200 px-10 w-1/2 h-32  rounded-full py-5  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-105 p-1  shadow-teal-500/50   shadow-xl  '>
        <h1 className='font-extrabold text-teal-200 flex justify-end '>High College</h1>
        <p className='text-left  text-sm font-normal  '>Intermediate from [For Women College] Completed Intermediate education with distinction,cultivating a passion for learning and laying the groundwork future success in higher education.</p>
        </div>
        <div className='border mt-7 border-teal-200 px-10 w-1/2 h-32  rounded-full py-5 transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-105 p-1  shadow-teal-500/50   shadow-xl mr-9 '>
        <h1 className='font-extrabold text-teal-200 flex justify-end '>University</h1>
        <p className='text-left  text-sm font-normal  '>BS Psychology [Iqra University]-(Present) pursuing a degree in psycology to understand human behavior and develop skills in research,analysis and counseling.</p>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

  

export default Education
