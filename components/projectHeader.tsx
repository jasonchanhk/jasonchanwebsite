import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css';

const ProjectHeader = () => {
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
    <div className={`md:top-24 ${styles.titletext} text-black relative h-40 md:h-36 w-full whitespace-nowrap overflow-x-hidden`}>
      <div className='absolute inset-0 font-extrabold text-7xl md:text-8xl w-full z-0 text-lime-300/60'>
        Latest Pojects
      </div>
      <div className='absolute inset-0 flex mx-auto max-w-7xl px-6 md:px-20 text-white'>
        <div className='flex-col'>
          <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 pt-10 md:pt-0'>03. </div>
          <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide'>
            My&nbsp;
            <span className='text-indigo-600'>Latest {isMobile && <br />}Projects&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHeader