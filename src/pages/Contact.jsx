import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import cv from '../assets/cv.pdf'
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLink, CiLocationOn } from "react-icons/ci";
import { Divider } from 'antd';
import { exp } from '../data/experience';
import { skills } from '../data/skills';
import { project } from '../data/project';
const Contact = () => {

  return (
    <>
      <section className='flex flex-col px-10 py-6 mt-[40px] border gap-3'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h2 className=' text-2xl font-semibold'>Nguyen Phuc Vinh</h2>
          <p className="text-sm">Front-end Developer</p>
        </div>
        <div className='flex gap-1 items-center justify-between'>
          <p className='flex gap-1 items-center'><CiPhone /> 079649405</p>
          <p className='flex gap-1 items-center'><MdOutlineEmail /> nguyenphucvinh1920@gmail.com</p>
          <a className='flex gap-1 items-center' target='_blank' href='https://vinhhandsomee.vercel.app/'><CiLink />https://vinhhandsomee.vercel.app/</a>
          <p className='flex gap-1 items-center'><CiLocationOn /> Tan Phu District, Ho Chi Minh City</p>
        </div>

        <div className='border-b-2 border-black'>
          <p className='text-2xl'>OBJECTIVE</p>
        </div>

        <p>Hello, I'm a{ " " } front-end developer with{ " 0.5 " } YOE. I enjoy building sites & apps. My focus is{ " React " }.</p>

        <div className='border-b-2 border-black'>
          <p className='text-2xl'>EDUCATION</p>
        </div>
        {
          exp.map((item, index) => {
            return (
              <div> {
                item.tag === 'learn' && <>
                  <p><span className='font-bold'>University: </span>{ item.company } ({ item.date })</p>
                  <p><span className='font-bold'>Major: </span>{ item.positon }</p>
                </>
              }
              </div>
            )
          })
        }


        <div className='border-b-2 border-black'>
          <p className='text-2xl'>WORK EXPERIENCE</p>
        </div>

        <div>
          {
            exp.map((item, index) => {
              return (
                <div key={ index } >
                  {
                    item.tag === 'work' && <>
                      <p><span className='font-bold'>Company: </span> { item.company }  ({ item.date })</p>
                      <p><span className='font-bold'>Website: </span>{ item.websiteComapy }.</p>
                      <p><span className='font-bold'>Positon: </span>{ item.positon }.</p>
                      <p><span className='font-bold'>Responsibility:</span> { item.responsibility }.</p>
                    </>
                  }
                </div>

              )
            })
          }
        </div>

        <div className='border-b-2 border-black'>
          <p className='text-2xl'>SKILLS</p>
        </div>

        <div className='flex justify-between flex-col'>
          <div >
            <p><span className='font-bold'>Front-end:</span>
              {
                skills.map((item, index) => {
                  return (
                    <span key={ index }>
                      { item.tag === 'fe' && item.name + ", " } { " " }
                    </span>
                  )
                }
                )
              }
            </p>
            <p><span className='font-bold'>Back-end:</span>{ " " }
              {
                skills.map((item, index) => {
                  return (
                    <span key={ index }>
                      { item.tag === 'be' && item.name + ", " } { " " }
                    </span>
                  )
                }
                )
              }
            </p>
          </div>
        </div>

        <div className='border-b-2 border-black'>
          <p className='text-2xl'>Project</p>
        </div>

        <div>
          {
            project.map((item, index) => {
              return (
                <div className='flex'>
                  <div>
                    <p className='font-semibold'>Name: </p>
                    <p className='font-semibold'>Description: </p>
                    <p className='font-semibold'>Link: </p>
                    <p className='font-semibold'>Website: </p>
                    <p className='font-semibold'>Technology description: </p>
                  </div>
                  <div>
                    <p className='font-normal'>{ item.title }</p>
                    <p className='font-normal'>{ item.description }</p>
                    <p className='font-normal'>{ item.linkGit }</p>
                    <p className='font-normal'>{ item.linkWeb }</p>
                    <p className='font-normal'>{ item.tags.map((item) => <span>{ item }, </span>) }</p>
                  </div>
                </div>
              )
            })

          }
        </div>

      </section>
      <div className='flex justify-end mt-2 gap-4'>
        <Link to={ '/project' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
      </div>
    </>
  )
}

export default Contact