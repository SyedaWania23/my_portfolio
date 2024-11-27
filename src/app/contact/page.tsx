import React from 'react'

const page = () => {
  return (
    <div className='bg-black min-h-screen '>
    
      <div >
       
        <h1 className='font-extrabold text-5xl   text-white mx-80 px-28 shadow-lg shadow-teal-500/50  '><span className='animate-pulse'>Contact </span><span className='text-teal-200 '>Me</span></h1>
      </div>
      {/* <div className='flex'>
     <div className='mx-24 '>
      <div className='  rounded-2xl'>
        <input type="text" className='w-96 mt-20 border border-teal-200 mx-7 shadow-teal-500/50 shadow-lg' placeholder='Name'/>
      </div>
      <div className='  rounded-2xl'>
        <input type="text" className='w-96  mt-5 border border-teal-200 mx-7  shadow-teal-500/50 shadow-lg' placeholder='Email' />
      </div>
      
    
      
      <div className='  rounded-2xl'>
        <input type="text" className='w-96 mt-5 border border-teal-200 mx-7 shadow-teal-500/50 shadow-lg' placeholder='Phone Number' />
      </div>
      <div className='  rounded-2xl'>
        <input type="text" className='w-96 mt-5 border border-teal-200 mx-7 shadow-teal-500/50 shadow-lg' placeholder='Subject' />
      </div>
      </div>
     
      <div >
        <textarea name="message" id="message" className=' py-10 px-10 mt-14' placeholder='Your Message'></textarea>
     
      
        <button className='border border-y-teal-200 rounded-full bg-teal-200 mt-20 font-semibold px-3 py-2'>send message</button>
        </div>
     
      </div> */}


      <div>
        <form className='flex' >
          <div >
<input type="text" className='w-96 bg-black rounded-md ml-44 mt-10 px-7 border h-8 border-teal-200 mx-7 shadow-teal-500/50 shadow-lg text-white' placeholder='Enter your name' />

<input type="text" className='w-96 bg-black text-white rounded-md ml-44 mt-7 px-7 border h-8 border-teal-200 mx-7 shadow-teal-500/50 shadow-lg ' placeholder='Enter your Email' />

<input type="text" className='w-96 bg-black rounded-md ml-44 mt-7 px-7 border h-8 border-teal-200 mx-7 shadow-teal-500/50 shadow-lg text-white' placeholder='Phone Number' />

<input type="text" className='w-96 bg-black rounded-md ml-44 mt-7 px-7 border h-8 border-teal-200 mx-7 shadow-teal-500/50 shadow-lg text-white ' placeholder='Subject' />
</div>

<div className='mr-96 '>
<textarea name="message" id="message" className=' py-14 text-center rounded-md px-16 shadow-lg bg-black shadow-teal-500/50 border border-teal-200  mt-12  text-white' placeholder=
'Your Message' ></textarea>
     
      
     <button className='border border-y-teal-200 rounded-full bg-teal-200 mt-2 ml-20 font-semibold px-3
      hover:bg-black hover:text-white py-1 transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-100'>Send message</button>
</div>



        </form>


      </div>

    </div>
  )
}

export default page
