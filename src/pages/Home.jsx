import React, { useRef } from 'react'
import Weather from '../components/Weather'
import { motion, useScroll, useTransform } from 'framer-motion'
import icon from '../assets/hi.png'
import { FaGithub, FaFacebook } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa6";
import cv from '../assets/CVFresherReactJS-NguyenPhucVinh.pdf'
import { Divider } from 'antd'
import second from '../assets/hehe.png'
const Home = () => {
    const containerVariants = {
        swinging: {
            rotate: [-2, 2, -1, 1, 0],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
            },
        },
    };
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <div className='p-3 sm:p-10'>
            <section id='intro' className='flex justify-between p-3 sm:p-10 srcoll-mt-[100px]'>
                <motion.div initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    className='flex flex-col text-center sm:text-start sm:flex sm:flex-col !gap-4  font-semibold '
                >
                    <motion.div ref={ ref }
                        style={ {
                            scale: scaleProgess,
                            opacity: opacityProgess,
                        } }
                        className='relative flex justify-content-center sm:justify-content-start'
                    >
                        <img src='https://i.pinimg.com/564x/90/7c/06/907c06197e02bf752cf107b21d03b524.jpg' width={ 80 } alt='logo' className='rounded-full  w-full sm:w-[80px]' />
                        <img className='absolute top-0 left-[70px]' src={ icon } alt='icon' width={ 40 } />
                    </motion.div>
                    <h1 className='text-4xl sm:text-sm'><em>Wellcome to my website</em> </h1>
                    <p>Please allow me to introduce</p>
                    <p className='w-full sm:w-1/2'>Currently, I am a 4th year student at Ho Chi Minh City University of Industry and Trade. And later I will be a frontend developer with React ❤️❤️❤️</p>
                    <p></p>
                    <div className='flex items-center justify-center sm:justify-start gap-5'>
                        <Link className='text-2xl'><FaGithub /></Link>
                        <Link className='text-2xl'><FaFacebook /></Link>
                        <Link download href={ cv } className='flex gap-2 items-center border px-3 rounded-md'>My CV <FaDownload /></Link>
                    </div>
                </motion.div>
                <div className='hidden sm:block'>
                    <Weather />
                </div>
            </section>
            <div className='flex justify-center items-center'>
                <img src={ second } alt='hehhe' width={ 60 } />
            </div>
            <section id='about' className='flex justify-end '>
                <p className='text-end'>A...u... Somee about meee 👉👈</p>
                <motion.div
                    initial="swinging"
                    animate="swinging"
                    variants={ containerVariants } >
                    <Link to={ '#about' }>Click!</Link>
                </motion.div>
            </section>
        </div>
    )
}

export default Home