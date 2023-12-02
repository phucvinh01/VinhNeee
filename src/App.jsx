import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
