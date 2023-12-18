import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaCcDiscover, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Button, Divider } from 'antd';
import { exp } from '../data/experience';
import { skills } from '../data/skills';
import { project } from '../data/project';
import { Helmet } from 'react-helmet';
import '../styles/Resume.scss';
import { info } from '../data/info';
import { joinArrayWithComma } from '../lib/api';
import { usePDF } from 'react-to-pdf';
import Resume from '../components/Resume'
import { PDFDownloadLink } from '@react-pdf/renderer';
const Contact = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  return (
    <>

      <Helmet>
        <meta charSet='utf-8' />
        <title>VinhHandSome😗 | Resumes</title>
      </Helmet>
      <div className='flex justify-end sm:mx-16 my-[20px]'>
        <PDFDownloadLink document={ <Resume /> } fileName="CV Intern React - NguyenPhucVinh.pdf">
          { ({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>

      <div >
        {/* <div id='content' >
          <div className='resume' >
            <div
              className='container' ref={ targetRef } >
              <div className='header'>
                <div className='full-name'>
                  <span className='first-name'>{ info.firstName }</span>
                  <span className='last-name'>{ info.lastName }</span>
                </div>
                <div className='contact-info'>
                  <span className='email'>Email: </span>
                  <span className='email-val'>{ info.email }</span>
                  <span className='separator'></span>
                  <span className='phone'>Phone: </span>
                  <span className='phone-val'>{ info.phone }</span>
                </div>

                <div className='about'>
                  <span className='position'>{ info.position } </span>
                  <span className='desc'>{ info.bio }</span>
                </div>
              </div>
              <div className='details'>
                <div className='section'>
                  <div className='section__title'>Experience</div>
                  <div className='section__list'>
                    <div className='section__list-item'>
                      { exp.map((item, index) => {
                        if (item.tag === 'work') {
                          return (
                            <React.Fragment key={ index }>
                              <div className='left'>
                                <div className='name'>{ item.company }</div>
                                <div className='addr'>{ item.websiteComapy }</div>
                                <div className='duration'>{ item.date }</div>
                              </div>
                              <div className='right'>
                                <div className='name'>{ item.positon }</div>
                                <div className='desc'>{ item.responsibility }</div>
                              </div>
                            </React.Fragment>
                          );
                        }
                      }) }
                    </div>
                  </div>
                </div>
                <div className='section'>
                  <div className='section__title'>Education</div>
                  <div className='section__list'>
                    <div className='section__list-item'>
                      { exp.map((item, index) => {
                        if (item.tag === 'learn') {
                          return (
                            <React.Fragment key={ index }>
                              <div className='left'>
                                <div className='name'>{ item.company }</div>
                                <div className='addr'>{ item.websiteComapy }</div>
                                <div className='duration'>{ item.date }</div>
                              </div>
                              <div className='right'>
                                <div className='name'>{ item.positon }</div>
                                <div className='desc'>{ item.responsibility }</div>
                              </div>
                            </React.Fragment>
                          );
                        }
                      }) }
                    </div>
                  </div>
                </div>
                <div className='section'>
                  <div className='section__title'>Projects</div>
                  <div className='section__list'>
                    <div className='section__list-item'>
                      { project.map((item) => {
                        return (
                          <div className='mb-3 border p-3 rounded-md' key={ item.title }>
                            <div className='name mb-2'>{ item.title }</div>
                            <div className='text mb-2'>{ item.description }</div>
                            <div className='text mb-2 text-gray-600'>
                              { joinArrayWithComma(item.tags) }
                            </div>
                            <div className='text mb-2 text-gray-500'>{ item.linkGit }</div>
                          </div>
                        );
                      }) }
                    </div>
                  </div>
                </div>
                <div className='section'>
                  <div className='section__title'>Skills</div>
                  <div className='skills'>
                    <div className='skills__item p-3 rounded-lg border'>
                      <div className='left'>
                        <div className='name'>FrontEnd</div>
                      </div>
                      <div className='right'>
                        <div className='desc overflow-hidden break-words'>
                          <ul>
                            { skills.map((item) => {
                              if (item.tag === 'fe') return <li key={ item.name }>{ item.name }</li>;
                            }) }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='skills__item p-3 rounded-lg border'>
                    <div className='left'>
                      <div className='name'>BackEnd</div>
                    </div>
                    <div className='right'>
                      <div className='desc overflow-hidden break-words'>
                        <ul>
                          { skills.map((item) => {
                            if (item.tag === 'be') return <li key={ item.name }>{ item.name }</li>;
                          }) }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='section'>
                  <div className='section__title'>Interests</div>
                  <div className='section__list'>
                    <div className='section__list-item'>
                      Football, programming and gaming.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Resume />
      </div>


      <div className='flex justify-end mt-2 gap-4'>
        <Link
          to={ '/project' }
          className='text-2xl p-2 border border-cyan-400 rounded-full'>
          <FaArrowLeft />
        </Link>
      </div>
    </>

  );
};

export default Contact;
