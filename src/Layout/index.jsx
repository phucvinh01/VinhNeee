import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='px-16'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout