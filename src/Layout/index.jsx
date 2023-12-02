import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Layout = () => {
    return (
        <main className='px-4 sm:px-16 bg-white dark:bg-black dark:text-white'>
            <Header />
            <Outlet />
            <Navigation />
        </main>
    )
}

export default Layout