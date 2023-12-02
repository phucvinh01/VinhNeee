import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowRotateRight } from 'react-icons/fa6'

const Navigation = () => {
    return (
        <div className='flex justify-end'>
            <button className='text-2xl'><FaArrowRight /></button>
        </div>
    )
}

export default Navigation