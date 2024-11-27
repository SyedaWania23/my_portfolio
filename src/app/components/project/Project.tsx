import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div className='pt-44'>
      <h1 className='text-white text-5xl shadow-teal-500/50 
       mx-72 px-20 shadow-lg font-extrabold '><span className='animate-pulse'>
        Selected</span><span className='text-teal-200'> Projects</span></h1>
       </div>
       
       <div className='flex justify-center gap-10 mt-11'>
       <div className='border border-teal-200 rounded-md shadow-teal-500/50  shadow-xl w-64
        h-96  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-105 p-1   '>
                        <Image src="/con.png" alt="car" width={400} height={300} className='shadow-teal-500/50  
                        shadow-xl'/>
                        <h1 className='text-white text-center
                         mt-4 font-semibold text-xl '> <span className='text-teal-200'>
                          C</span>ontact <span className='text-teal-200 '> F</span>orm</h1>
                          <p className='text-white mt-3 text-left px-4 text-sm font-normal '>I built a Contact Form page,an HTML/CSS of the clean popular design,showcasing my front-end development.
                        
                        Technology:HTML5,CSS3
                         </p>

       </div>
       <div className='border border-teal-200 rounded-md shadow-teal-500/50  shadow-xl w-64
        h-96  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-105 p-1   '>
                        <Image src="/car3.png" alt="car" width={400} height={400} className='shadow-teal-500/50  shadow-xl'/>
                        <h1 className='text-white text-center
                         mt-4 font-semibold text-xl '> <span className='text-teal-200'>C</span>ar <span className='text-teal-200'>W</span>ebsite</h1>
                         <p className='text-white mt-3 text-left px-4 text-sm font-normal '>I built a Car Website, with the help of NextJS & TailwindCSS, showcasing my front-end development skills.
                        
                        Technology:NextJS,TailwindCSS
                         </p>

       </div>
       <div className='border border-teal-200 rounded-md shadow-teal-500/50  shadow-xl w-64
        h-96  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-105 p-1   '>
                        <Image src="/dararr.png" alt="car" width={400} height={400} className='shadow-teal-500/50  shadow-xl'/>
                        <h1 className='text-white text-center
                         mt-4 font-semibold text-xl underline'><span className='text-teal-200'>D</span>araz <span className='text-teal-200'>
                          C</span>lone</h1>
                         <p className='text-white mt-3 text-left px-4 text-sm font-normal '>I built a Daraz Clone,an HTML/CSS replica of the popular e-commerce plateform,showcasing my front-end development.
                        
                        Technology:HTML5,CSS3
                         </p>

       </div>
       
       </div>
       ********
      
    </div>
  )
}
  
export default Project
