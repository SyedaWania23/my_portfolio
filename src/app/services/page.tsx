import React from 'react'

const page = () => {
  return (
    <div className='bg-black h-screen'>
        <div className=''>
     <h1 className='font-extrabold text-white  mx-80 px-36
     text-5xl  shadow-teal-500/50   shadow-lg  '>
      <span className='text-teal-200 animate-pulse'>S</span>ervices</h1> 
     </div>
     <div className='flex'>
     <div className=' mt-10 ml-6 mx-5 
     px-10 
      w-1/2 h-32  rounded-2xl bg-teal-200 py-5  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-95 p-1  shadow-teal-500/50  hover:bg-teal-100 shadow-xl '>
        <h1 className='font-extrabold  underline'>Frontend Web Developer</h1>
        <p className='text-left  text-sm font-normal mt-1 '>Understanding of HTML, CSS, JavaScript, and modern frameworks like React and Next.js,I create seamless web experiences that are optimized for performance and align with your brand and goals.</p>
        </div>
        
        <div className='border mt-10 ml-6 mx-5  border-teal-200 px-10 w-1/2 h-32  rounded-2xl bg-teal-200 py-5  transition duration-500 ease-in-out   hover:shadow-lg transform 
                       hover:-translate-y-1 hover:scale-95 p-1  shadow-teal-500/50  hover:bg-teal-100 shadow-xl  '>
        <h1 className='font-extrabold underline  '>Graphic Designer</h1>
        <p className='text-left  text-sm font-normal mt-1 '>I
        design visually compelling graphics that effectively communicate your brand&apos;s message. From logos to marketing materials, I create custom designs that are both creative and aligned with your business identity.</p>
        </div>
        </div>
        
        <div className='flex '>
        <div className='border mt-8 ml-6 mx-5 border-black px-10 w-1/2 h-32  rounded-2xl  py-5  transition duration-500 ease-in-out   bg-teal-200 hover:bg-teal-100 transform 
                       hover:-translate-y-1 hover:scale-95 p-10  shadow-teal-500/50   shadow-xl  '>
        <h1 className='font-extrabold underline '>MS Office Expert</h1>
        <p className='text-left  text-sm font-normal mt-1 '>I provide expert-level proficiency in Microsoft Office applications, including Word, Excel, PowerPoint.From creating detailed reports to designing impactful presentations, I ensure accuracy in all tasks.</p>
        </div>
        <div className='border mt-8 ml-6 mx-5  border-teal-200 px-10 w-1/2 h-32  rounded-2xl bg-teal-200 py-5  transition duration-500 ease-in-out   hover:shadow-lg hover:bg-teal-100 transform 
                       hover:-translate-y-1 hover:scale-95 p-1  shadow-teal-500/50   shadow-xl  '>
        <h1 className='font-extrabold  underline'>Logo & Flyers Expert</h1>
        <p className='text-left  text-sm font-normal mt-1 '>I design unique logos & flyers that perfectly represent your brand.Whether you&apos;re launching a new business or promoting an event,I focus on creativity,audience engagement in every design.</p>
        </div>

        </div>
    </div>
  )
}

export default page
