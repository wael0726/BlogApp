import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=' bg-gray-100 px-4 py-32 mx-auto flex items-center justify-center'>
        <div className='text-black text-center'>
            <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Bienvenue</h1>
            <p className='text-black lg:w-3/5 mx-auto mb-5'>Découvrez Future Intelligence, votre guide incontournable pour explorer, comprendre et maîtriser les merveilles de l'intelligence artificielle!</p>

            {/* btn here */}
            <div>
                <Link to="/" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner