import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css';

const ExperienceHeader = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <div className={`md:top-24 ${styles.titletext} text-black relative h-52 md:h-28 w-full whitespace-nowrap overflow-x-hidden`}>
      <div className='absolute inset-0 font-extrabold text-7xl md:text-8xl w-full text-gray-50 z-0'>
        ducation & Work Experience My education
      </div>
      <div className='absolute z-40 inset-0 mx-auto px-6 md:flex md:justify-center'>
        <div className='flex-col'>
          <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40 pt-10 md:pt-0'>02. </div>
          <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide z-40 text-wrap'>
            My&nbsp;
            <span className='text-lime-500'>Education&nbsp;</span>
            {isMobile && <br />}
            &&nbsp;
            <span className='text-lime-500'>Work {isMobile && <br />}Experience </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceHeader