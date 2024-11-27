import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex font-bold font-serif bg-black py-4 justify-center  '>
     <div className='flex gap-2  text-lg mb-2  shadow-teal-500/50
      shadow-lg'>
      <h1 className='text-white '>Syeda</h1>
     <h1 className='text-teal-200'>Wania</h1></div> 
    

     <div >
        <ul className=' flex mx-44  gap-14 mt-1  text-white text-sm'>
            <li className='hover:text-teal-200 hover:underline transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 '><Link href="/">Home</Link></li>
            <li className='hover:text-teal-200 hover:underline transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 '><Link href="/education">Education </Link></li>
            
            <li className='hover:text-teal-200 hover:underline transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 '><Link href="/services">Services </Link></li>
            <li className='hover:text-teal-200 hover:underline transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 '><Link href="/project">Project </Link></li>
            <li className='hover:text-teal-200 hover:underline transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 '><Link href="/contact">Contact </Link> </li>
            </ul>
     </div>
     
    </div>
    
 
  )
}

export default Navbar
