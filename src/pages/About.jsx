import React from 'react'
import aboutImg from "../assets/about.png"
import chatImg from "../assets/chat.png"
import noirImg from "../assets/noir.png"
import User2 from "../assets/user-02.png"
import User3 from "../assets/user-03.png"
import User1 from "../assets/user-01.png"

import { HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <div className='text-black'>
      <div className='py-40 bg-gray-100 text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>About Us Page</h1>
        <p className='text-lg text-gray-600 lg:w-3/5 mx-auto'>
          Welcome to our About Us page! Here, you can learn more about our mission, vision, and dedication to delivering high-quality articles and blogs. 
          We aim to inspire, inform, and connect people through our content. Dive into our story and discover what drives us forward.
        </p>
      </div>

      {/* about content */}
      <div className='max-w-7xl mx-auto px-4 my-20 text-black'>

        {/* top content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='md:w-1/2'>
            <img src={aboutImg} alt="" className='w-full' />
          </div>
          <div className='md:w-1/2'>
            <h5 className='text-orange-500 text-xl font-medium mb-4'>Our Mission</h5>
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4"
            >
              Empowering Knowledge Through Quality Content
            </h2>
            <p className='text-lg text-gray-600'>
              At our core, we believe in the transformative power of information. Our mission is to deliver well-researched, engaging, and impactful articles and blogs that inspire, educate, and spark curiosity in our readers.
              <br /> <br />
              From industry insights to personal development tips, our content is crafted with care and precision, ensuring that every piece adds value to your journey of discovery and growth.
            </p>
          </div>
        </div>

        {/* Author section */}
        <div className='mt-20'>
          <h2 className='text-5xl font-bold mb-8 '>Top Authors</h2>
          <hr className='my-5' />

          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-between items-center w-full mx-auto gap-12 mt-12'>
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={chatImg} alt="Bennabi Wael" className='mb-4 mx-auto w-[100px] h-[100px] object-cover' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Bennabi Wael</h5>
                <p className='text-base mb-2'>Developer and Content Writer</p>
                <div className='flex gap-2 items-center text-gray-600 justify-center'><HiOutlineDocumentText className='w-5 h-5' /> 12 Articles Published </div>
              </div>
            </div>
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={noirImg} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Kenny</h5>
                <p className='text-base mb-2'>Developer and Content Writer</p>
                <div className='flex gap-2 items-center text-gray-600 justify-center'><HiOutlineDocumentText className='w-5 h-5' />8 Articles Published </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
