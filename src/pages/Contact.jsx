import React, { useState } from 'react'
import { FaArrowLeft, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLink, CiLocationOn } from "react-icons/ci";
import { Button, Divider } from 'antd';
import { exp } from '../data/experience';
import { skills } from '../data/skills';
import { project } from '../data/project';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet';
const Contact = () => {
  const [pdf, setPdf] = useState(null);

  const generatePDF = () => {
    html2canvas(document.getElementById('content')).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('CV Intern FrontEnd - NguyenPhucVinh.pdf');
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VinhHandSome😗 | Resumes</title>
      </Helmet>
      <div className='flex justify-end sm:mx-16 my-[20px]'>
        <Button className='dark:text-white' onClick={ () => generatePDF() } icon={ <FaDownload /> }>Download my resumes</Button>
      </div>
      <section id='content' className='flex flex-col px-6  sm:mx-16 py-6 border gap-3'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h2 className=' text-2xl font-semibold'>Nguyen Phuc Vinh</h2>
          <p className="text-sm">Front-end Developer</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-1 items-center justify-between'>
          <p className='flex gap-1 items-center justify-items-center'><CiPhone className='p-0' /> 0792649405</p>
          <p className='flex gap-1 items-center justify-items-center'><MdOutlineEmail className='p-0' /> nguyenphucvinh1920@gmail.com</p>
          <a className='flex gap-1 items-center justify-items-center' target='_blank' href='https://vinhhandsomee.vercel.app/'><CiLink className='p-0' />https://vinhhandsomee.vercel.app/</a>
          <p className='flex gap-1 items-center justify-items-center'><CiLocationOn className='p-0' /> Tan Phu District, Ho Chi Minh City</p>
        </div>

        <div className='border-b-2 border-black pb-2'>
          <p className='text-2xl'>OBJECTIVE</p>
        </div>

        <p>Hello, I'm a{ " " } front-end developer with{ " 0.5 " } YOE. I enjoy building sites & apps. My focus is{ " React " }.</p>

        <div className='border-b-2 border-black pb-2'>
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


        <div className='border-b-2 border-black pb-2'>
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

        <div className='border-b-2 border-black pb-2'>
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

        <div className='border-b-2 border-black pb-2'>
          <p className='text-2xl'>Project</p>
        </div>


        {
          project.map((item, index) => {
            return (
              <div className='flex justify-start border sm:p-4'>
                <div className='w-1/5 sm:min-w-[300px]'>
                  <p className='font-semibold text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-8 w-full sm:h-[40px]'>Name</p>
                  <p className='font-semibold text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-9  w-full sm:h-[60px]'>Description</p>
                  <p className='font-semibold text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-8 w-full sm:h-[40px]'>Link</p>
                  <p className='font-semibold text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-8 w-full sm:h-[40px]'>Technology Description</p>
                </div>
                <div key={ index } className='flex flex-col'>
                  <td className='font-normal text-xs sm:text-base  p-1 sm:py-2 sm:px-4 h-8 sm:h-[40px]'>{ item.title }</td>
                  <td className='font-normal text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-9 max-w-screen-sm text-overflow-ellipsis overflow-hidden sm:h-[60px]'>{ item.description }</td>
                  <td className='font-normal text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-8 sm:h-[40px]'>{ item.linkGit }</td>
                  <td className='font-normal text-xs sm:text-base p-1 sm:py-2 sm:px-4 h-8 sm:h-[40px]'>{ item.tags.map((item) => <span>{ item }, </span>) }</td>
                </div>
              </div>

            )
          })
        }


      </section>
      <div className='flex justify-end mt-2 gap-4'>
        <Link to={ '/project' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
      </div>
    </>
  )
}

export default Contact