import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import './index.css'
import { lazy, Suspense } from 'react';
function App() {

  return (
    <>
      <Suspense fallback={ 'loadingg.....' }>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/project" element={ <Project /> } />
            <Route path="/skill" element={ <Skill /> } />
            <Route path="/experience" element={ <Experience /> } />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));
const Skill = lazy(() => import('./pages/Skill'));
const Experience = lazy(() => import('./pages/Experience'));

export default App
