import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaArrowRotateRight } from 'react-icons/fa6'
import { link } from '../../data/link'
import { Link } from 'react-router-dom'
const Navigation = (props) => {

    const { href } = props

    return (
        <div className='flex justify-end gap-3'>
            <Link to={ href } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
        </div>
    )
}

export default Navigation