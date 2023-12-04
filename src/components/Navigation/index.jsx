import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaArrowRotateRight } from 'react-icons/fa6'
import { link } from '../../data/link'
import { Link } from 'react-router-dom'
const Navigation = (props) => {


    const { href } = props

    const currentHash = window.location.pathname;
    const currentIndex = link.findIndex((item) => item.hash === currentHash)


}

export default Navigation