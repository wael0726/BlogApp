import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaClock } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';



const SingleBlog = () => {
    const data = useLoaderData();
    console.log(data)
    const { title, author, content, image, reading_time, published_date } = data;
    console.log(title)
    return (
        <div>
            <div className='py-36 bg-gray-100 text-black text-center px-4'>
                <h1 className='text-5xl leading-snug font-bold mb-5'>Single Blog</h1>
            </div>

            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div><img src={image} alt="" className='mx-auto w-full rounded mb-5' /></div>
                    <h2 className='text-3xl font-bold mb-4 text-blue-600 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}</p>
                    <p className='mb-6 text-gray-600'><FaClock className='inline-flex items-center mr-2' /> {reading_time}</p>
                    <p className='text-sm text-gray-500 mb-6 '>{content} </p>
                    <div className='text-base text-gray-500'>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                <Sidebar/>
                </div>

            </div>
        </div>
    )
}

export default SingleBlog