import React from 'react'
import second from '../assets/renga.png'
import { project } from '../data/project'
import Card from '../components/Card'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
const Project = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VinhHandSome😗 | Project</title>
            </Helmet>
            <div className='flex justify-between relative'>
                <div className='hidden sm:block sticky top-[50px] h-[200px]  w-1/2'>
                    <img src={ second } alt='heheh' />
                </div>
                <motion.section
                    className="mb-28  w-full sm:w-1/2 text-center leading-8 sm:mb-40 scroll-mt-28"
                    initial={ { opacity: 0, y: 100 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { delay: 0.175 } }
                    id="projects">
                    {
                        project.map((item, index) => {
                            return (
                                <React.Fragment key={ index }>
                                    <Card { ...item } />
                                </React.Fragment>
                            )
                        })
                    }
                </motion.section>

            </div>
            <section className='flex justify-center sm:justify-end mt-2 gap-4'>
                <Link to={ '/experience' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
                <Link to={ '/resumes' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowRight /></Link>
            </section>
        </div>
    )
}

export default Project