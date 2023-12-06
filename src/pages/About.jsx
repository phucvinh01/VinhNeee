import React from 'react'
import { motion } from "framer-motion";
import second from '../assets/about.png'
import secondd from '../assets/dark2.png'
import { Helmet } from "react-helmet";
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { skills } from '../data/skills';
const About = () => {

    const { theme } = useTheme()
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VinhHandSome😗 | About</title>
            </Helmet>
            <div className='p-2 sm:p-5 flex flex-col sm:flex-row gap-4'>
                <div className='flex justify-center w-full'>
                    <motion.section
                        initial={ { opacity: 0, y: 100 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { delay: 0.175 } }
                        className="mb-20 max-w-[45rem] text-center leading-6 sm:mb-40 scroll-mt-20 mt-20">
                        <h2 className='text-4xl font-semibold mb-3'>Hello I'm Vinh</h2>
                        <p className="mb-3 font-normal !leading-[1.5]">
                            After graduating with a degree in{ " " }
                            <span className="font-medium">Software engineering</span>, I pursue my passion of becoming { " " }
                            <span className="font-medium">front-end development</span>.{ " " }
                            <span className="italic">My favorite part of programming</span> is the
                            problem-solving aspect. I <span className="underline">love</span> the
                            feeling of finally figuring out a solution to a problem. My core stack
                            is{ " " }
                            <span className="font-medium">
                                React, Next.js
                            </span>
                            . I am also familiar with TypeScript. I am always looking to
                            learn new technologies. I am currently looking for a{ " " }
                            <span className="font-medium">full-time position</span> as a software
                            developer.
                        </p>

                        <p className='font-medium !leading-[1.5]'>
                            <span className="italic">When I'm not coding</span>, I enjoy playing
                            video games, watching movies. I also enjoy{ " " }
                            <span className="font-medium">learning new things</span>. I am currently
                            learning about{ " " }
                            <span className="font-medium">history and psychology</span>
                        </p>
                        <div className='mt-6'>
                            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                                { skills.map((skill, index) => (
                                    <motion.li
                                        className="bg-gray-100 borderBlack rounded-xl px-1 py-1 dark:bg-white/10 dark:text-white/80"
                                        key={ index }
                                        variants={ fadeInAnimationVariants }
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={ {
                                            once: true,
                                        } }
                                        custom={ index }
                                    >
                                        { skill.name }
                                    </motion.li>
                                )) }
                            </ul>
                        </div>

                    </motion.section>


                </div>

                <img src={ theme !== 'dark' ? second : secondd } alt='img' className='w-full sm:w-1/4' />



            </div>
            <section className='flex justify-center sm:justify-end mt-2 gap-4'>
                <Link to={ '/' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
                <Link to={ '/experience' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowRight /></Link>
            </section>
        </>

    )
}

export default About