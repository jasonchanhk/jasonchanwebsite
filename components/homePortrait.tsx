import { useState, useEffect } from 'react'
import Image from 'next/image'

const HomePortrait = () => {
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
    <div className='absolute z-20 inset-0 mx-auto flex justify-center items-end'>
      <Image
        src="/images/portrait-removebg-4.png"
        alt="Picture of the author"
        height={isMobile ? 400 : 600}
        width={600}
        layout='fixed'
        objectFit="cover" />
    </div>
  )
}

export default HomePortrait;