import { IconContext } from "react-icons";
import { IoChevronForward } from 'react-icons/io5'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import RedirectButton from "./redirectButton";

const SelfIntroduction = () => {
    return (
        <div className="md:pr-12 md:text-base text-sm leading-snug mb-6 md:mb-12">
            <p className="">I’m a software engineer with 2+ years of industry experience, focusing on JavaScript and object-oriented programming. </p>
            <br />
            <p>I don’t just stick to the technical side; My background in community work helps me to look at the bigger picture. It allows me to easily talk to different people and explain complex ideas to them.</p>
            <br />
            <p>I maintain an active lifestyle and constantly challenge myself with new experiences. I approach everything with a positive mindset, always looking for opportunities to grow and improve.</p>
        </div>
    )
}

const AboutTitle = () => {
    return (
        <div className={` ${styles.titletext} relative h-40 md:h-52 w-full whitespace-nowrap overflow-x-hidden`}>
            <div className='absolute inset-0 font-extrabold text-7xl md:text-8xl w-full z-0 text-lime-400/60'>
                About <br /> me
            </div>
            <div className='absolute z-40 inset-0 text-white'>
                <div className='flex-col'>
                    <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>01. </div>
                    <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide z-40'>
                        Who&nbsp;is&nbsp;
                        <span className='text-indigo-600'>Jason<br />Chan?</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className={`py-12 md:py-24 mx-auto px-6 md:px-20 max-w-7xl`}>
            <div className='flex flex-col md:flex-row md:items-stretch gap-8'>

                <div className='flex-1 bg-gray-50 p-2 md:grid grid-rows-2 grid-flow-col gap-2 rounded-2xl h-[640px] hidden'>
                    <div className='h-full w-full relative'>
                        <Image
                            src="/images/me-flying.png"
                            alt="Picture of the author"
                            layout='fill'
                            objectFit="cover" // change to suit your needs
                            className="rounded-xl grayscale" />
                    </div>
                    <div className='h-full w-full relative'>
                        <Image
                            src="/images/me-reading.png"
                            alt="Picture of the author"
                            layout='fill'
                            objectFit="cover" // change to suit your needs
                            className="rounded-xl grayscale" />
                    </div>
                    <div className='h-full w-full relative'>
                        <Image
                            src="/images/me-basketballing.png"
                            alt="Picture of the author"
                            layout='fill'
                            objectFit="cover" // change to suit your needs
                            className="rounded-xl grayscale" />
                    </div>
                    <div className='h-full w-full relative'>
                        <Image
                            src="/images/me-smiling.png"
                            alt="Picture of the author"
                            layout='fill'
                            objectFit="cover" // change to suit your needs
                            className="rounded-xl grayscale" />
                    </div>
                </div>
                <div className='flex-1 text-white text-lg p-2'>
                    <AboutTitle />
                    <SelfIntroduction />
                    <RedirectButton coloured={false}>
                        <a href="Jason Chan (Software Enginner).pdf" target="_blank" rel="noreferrer">Download Resume</a>
                    </RedirectButton>
                </div>
            </div>
        </div>
    )
}

export default About

