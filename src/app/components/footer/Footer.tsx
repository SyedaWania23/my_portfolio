import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';



const Footer = () => {
  return (
    
   <div className='bg-gray-800 min-w-screen h-40 '>
    <div className="flex gap-6  mx-96 justify-center space-y-5">
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/syeda-wania-8a183729a/" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform 
    hover:-translate-y-1 hover:scale-110 '>
        <div className="w-8 h-8 mt-5 bg-transparent border-2 border-white flex items-center justify-center rounded-full p-4  transition duration-300">
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
   
    <ul className='text-white font-semibold flex gap-5 py-3   text-sm justify-center'>
      <li className='hover:text-teal-200 transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 p-1 hover:underline'><Link href="/services">Services</Link></li>
      <li className='hover:text-teal-200 transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 p-1 hover:underline'><Link href="/">About Me</Link>
                       </li>
      <li className='hover:text-teal-200  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 p-1 hover:underline'><Link href="/contact"
                       >Contact</Link></li>
      <li className='hover:text-teal-200 hover:underline transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-110 p-1 '><Link href="/project">Projects</Link></li>
    </ul>
  <div className='text-white font-semibold text-center text-xs mt-3'>
   <h1>Syeda Wania | All Rights Reserved</h1> 
  </div>
   </div>
  )
}

export default Footer
