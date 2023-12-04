import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import cv from '../assets/cv.pdf'
import { Document, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


const cvData = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0912345678",
    education: {
        university: "Đại học Bách khoa Hà Nội",
        major: "Công nghệ thông tin",
        graduationYear: "2023",
    },
    experience: {
        company: "Google",
        position: "Software Engineer",
        time: "2021-nay",
        description: "Phát triển các ứng dụng web và di động",
    },
    skills: {
        hard: ["Java", "Python", "JavaScript"],
        soft: ["Lập luận", "Khả năng giải quyết vấn đề", "Khả năng làm việc nhóm"],
    },
};

const createCV = (cvData) => {
    const html = `
    <html>
      <head>
        <title>CV</title>
      </head>
      <body>
        <header>
          <h1>Tiêu đề CV</h1>
        </header>
        <section>
          <h2>Thông tin cá nhân</h2>
          <p>Tên: ${cvData.name}</p>
          <p>Email: ${cvData.email}</p>
          <p>Số điện thoại: ${cvData.phone}</p>
        </section>
        <section>
          <h2>Trình độ học vấn</h2>
          <ul>
            <li>
              <p>Đại học: ${cvData.education.university}</p>
              <p>Ngành học: ${cvData.education.major}</p>
              <p>Năm tốt nghiệp: ${cvData.education.graduationYear}</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Kinh nghiệm làm việc</h2>
          <ul>
            <li>
              <p>Công ty: ${cvData.experience.company}</p>
              <p>Chức vụ: ${cvData.experience.position}</p>
              <p>Thời gian: ${cvData.experience.time}</p>
              <p>Mô tả công việc: ${cvData.experience.description}</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Kỹ năng</h2>
          <ul>
            <li>
              <p>Kỹ năng cứng: ${cvData.skills.hard}</p>
            </li>
            <li>
              <p>Kỹ năng mềm: ${cvData.skills.soft}</p>
            </li>
          </ul>
        </section>
      </body>
    </html>
  `;

    return html;
};
const Contact = () => {

    const downloadCV = () => {
        const html = createCV(cvData);
        const blob = new Blob([html], { type: "application/pdf" });
    };
    const [file, setFile] = useState(cv);
    return (
        <>
            <section className='flex justify-center items-center mt-[80px] gap-4'>
                <Document file={ cv } />
            </section>
            <div className='flex justify-end mt-2 gap-4'>
                <Link to={ '/project' } className='text-2xl p-2 border border-cyan-400 rounded-full'><FaArrowLeft /></Link>
            </div>
        </>
    )
}

export default Contact