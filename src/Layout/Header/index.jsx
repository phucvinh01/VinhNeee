import React, { useEffect, useState } from 'react'
import { link } from '../../data/link'
import { Link, NavLink } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import MenuMobie from '../../components/MenuMobie';
const Header = () => {

    const [theme, setTheme] = useState('light')
    const [isEN, setIsEN] = useState(false)

    const handleChangeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme")

        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        }
        //     }
        //     else {
        //         document.documentElement.classList.remove("dark");
        //     }
        // } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //     setTheme("dark");
        //     document.documentElement.classList.add("dark");
        // }
    }, [])

    return (
        <header className='relative'>
            <div className='flex w-full justify-between h-16 items-center '>
                <p className='cursor-pointer font-medium'>Vinh hand some</p>
                <motion.div initial={ { y: -100, opacity: 0 } }
                    animate={ { y: 0, opacity: 1 } }>
                    <div className=' flex gap-4 border rounded-full px-4 py-3 items-center '>
                        <ul className='sm:flex gap-4 hidden'>
                            {
                                link.map((item, index) => {
                                    return (
                                        <li className='flex items-center' key={ index }>
                                            <NavLink className='px-4 py-1 text-black font-medium hover:text-teal-500 transition dark:text-white' to={ item.hash }>{ item.name }</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className='sm:hidden block'>
                            <MenuMobie />
                        </div>
                        <div className='flex gap-3'>
                            {
                                theme === 'light' ? <button onClick={ () => handleChangeTheme() }><FiSun /></button> : <button onClick={ () => handleChangeTheme() }><FaRegMoon /></button>
                            }
                            {
                                !isEN ? <button onClick={ () => setIsEN(!isEN) }>VN</button> :
                                    <button onClick={ () => setIsEN(!isEN) }>EN</button>
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}

export default Header