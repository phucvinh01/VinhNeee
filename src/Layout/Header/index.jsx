import React from 'react'
import { link } from '../../data/link'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className=''>
            <div className='flex w-full justify-between h-16 items-center'>
                <p className='cursor-pointer font-medium'>Vinh hand some</p>
                <motion.div initial={ { y: -100, opacity: 0 } }
                    animate={ { y: 0, opacity: 1 } } className='hidden sm:block'>
                    <div className='flex gap-4 border rounded-full px-4 py-3'>
                        <ul className='flex gap-4'>
                            {
                                link.map((item, index) => {
                                    return (
                                        <li className='flex items-center' key={ index }>
                                            <Link className='px-4 py-1 text-black font-medium hover:text-teal-500 transition' to={ item.hash }>{ item.name }</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className='flex gap-3'>
                            <button>Dark</button>
                            <button>VN</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}

export default Header