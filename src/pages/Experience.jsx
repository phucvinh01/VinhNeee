import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { exp } from '../data/experience';
import { useTheme } from '../context/ThemeContext';
import second from '../assets/working.png'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { skills } from '../data/skills';
import { motion } from 'framer-motion'
const Experience = () => {

    const { theme } = useTheme()

    const Icon = () => {
        return (
            <>
                <img src={ second } />
            </>
        )
    }


    return (
        <>
            <section className="p-3 sm:p-20 scroll-mt-28  flex flex-col items-center justify-center">

                <VerticalTimeline>
                    {
                        exp.map((item, index) => {
                            return (
                                <React.Fragment key={ index }>
                                    <VerticalTimelineElement
                                        icon={ <Icon /> }
                                        className="vertical-timeline-element--work"
                                        contentStyle={ {
                                            background:
                                                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                            boxShadow: "none",

                                            border: "1px solid rgba(0, 0, 0, 0.05)",
                                            textAlign: "left",
                                            padding: "1.3rem 2rem",
                                        } }
                                        contentArrowStyle={ {
                                            borderRight:
                                                theme === "light"
                                                    ? "0.4rem solid #9ca3af"
                                                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                                        } }
                                        iconStyle={ {
                                            background:
                                                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                            fontSize: "1.5rem",
                                        } }
                                        date={ item.date }
                                    >
                                        <a title={ item.websiteComapy } className="text-lg font-semibold capitalize" href={ item.websiteComapy }>{ item.company }</a>
                                        <p className="font-normal !mt-0">{ item.positon }</p>
                                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                            { item.responsibility }
                                        </p>
                                    </VerticalTimelineElement>
                                </React.Fragment>

                            )
                        })
                    }
                </VerticalTimeline>
                <section className='flex justify-end mt-2 gap-4'>
                    <Link to={ '/about-skill' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
                    <Link to={ '/project' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowRight /></Link>
                </section>
            </section>

        </>

    )
}

export default Experience