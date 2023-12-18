import React, { useRef } from 'react'
import Weather from '../components/Weather'
import { motion, useScroll, useTransform } from 'framer-motion'
import icon from '../assets/hi.png'
import { FaGithub, FaFacebook, FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa6";
import second from '../assets/hehe.png'
import darkImg from '../assets/home-dark.png'
import { useTheme } from '../context/ThemeContext'
import { Helmet } from 'react-helmet'
import { PDFDownloadLink } from '@react-pdf/renderer'
import Resume from '../components/Resume'
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
    const { theme } = useTheme()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VinhHandSome😗</title>
            </Helmet>
            <div className='p-2 sm:p-5'>
                <section id='intro' className='flex justify-between p-3 sm:p-5 srcoll-mt-[100px]'>
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
                        <motion.p
                            className="w-full sm:w-1/2 mb-10 mt-4 px-4 text-xl text-center sm:text-start font-medium !leading-[1.5] sm:text-2xl"
                            initial={ { opacity: 0, y: 100 } }
                            animate={ { opacity: 1, y: 0 } }
                            transition={ { delay: 0.5 } }
                        >
                            <span className="font-bold">Hello, </span> I'm a{ " " }
                            <span className="font-bold">front-end developer</span> with{ " 0.5 " }
                            YOE. I enjoy
                            building <span className="italic">sites & apps</span>. My focus is{ " " }
                            <a target='_blank' className="underline" href='https://en.wikipedia.org/wiki/React_(software)'>React</a>.
                        </motion.p>
                        <div className='flex flex-row gap-3 justify-center sm:justify-start items-center'>
                            <Link className='p-2' to={ '/https://www.facebook.com/viinnh02' } target='_blank'><FaFacebook /></Link>
                            <Link className='p-2' to={ 'https://github.com/phucvinh01' }><FaGithub /></Link>
                            <PDFDownloadLink className='flex items-center gap-1 border p-2 rounded' document={ <Resume /> } fileName="CV Intern React - NguyenPhucVinh.pdf">
                                { ({ blob, url, loading, error }) =>
                                    loading ? 'Loading document...' : (<><FaDownload /> Download my CV</>)
                                }
                            </PDFDownloadLink>
                        </div>
                    </motion.div>
                    <div className='hidden sm:block'>
                        <Weather />
                    </div>
                </section>

                <motion.div initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } } className='flex justify-center items-center'>
                    <img className='dark:bg-white' src={ theme !== 'dark' ? second : darkImg } alt='hehhe' width={ 60 } />
                </motion.div>
                <section id='about' className='flex justify-end '>
                    <p className='text-end'>A...u... Somee about meee 👉👈</p>
                    <motion.div
                        initial="swinging"
                        animate="swinging"
                        variants={ containerVariants } >
                        <Link to={ '#about' }>Click!</Link>
                    </motion.div>
                </section>
                <section className='flex justify-end mt-2'>
                    <Link to={ '/about-skill' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowRight /></Link>
                </section>
            </div>
        </>
    )
}

export default Home