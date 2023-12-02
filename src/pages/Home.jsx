import React, { useRef } from 'react'
import Weather from '../components/Weather'
import { motion, useScroll, useTransform } from 'framer-motion'

const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <div className='p-10'>
            <div className='flex justify-between p-10'>
                <motion.div initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }>
                    <motion.div ref={ ref }
                        style={ {
                            scale: scaleProgess,
                            opacity: opacityProgess,
                        } }>
                        <img src='https://i.pinimg.com/564x/90/7c/06/907c06197e02bf752cf107b21d03b524.jpg' width={ 80 } alt='logo' className='rounded-full' />

                    </motion.div>
                    <h1 className='text-lg font-semibold'>Welcome to mt website</h1>
                    <p>lorem.....</p>
                    <div className='flex gap-5'>
                        <button>github</button>
                        <button>facebook</button>
                        <button>intagram</button>
                    </div>
                </motion.div>

                <Weather />
            </div>

        </div>
    )
}

export default Home