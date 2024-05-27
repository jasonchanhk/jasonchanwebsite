import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons";

const HomeContent = () => {

    const copyEvent = () => {
        navigator.clipboard.writeText('chanjky97@gmail.com');
        alert('Email copied to clipboard');
    }

    return (
        <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <div className='flex flex-col'>
                <div className='flex justify-center text-2xl'>
                    <div className='flex items-center pb-6'>
                        <div className='bg-lime-400 h-1 w-4 mr-3'></div>
                        <div className='inline-block'>Hello</div>
                    </div>
                </div>
                <div className={`font-bold text-6xl md:text-8xl ${styles.titletext} flex flex-col`}>
                    <div className='flex justify-center'>
                        <div>I&apos;m&nbsp;</div>
                        <div className='inline-block text-lime-400'>
                            Jason,
                            <div className='bg-lime-400 h-2'></div>
                        </div>
                    </div>
                    <div className='flex justify-center'>Software Engineer</div>
                </div>
                <div className='mt-24 h-80 z-40 flex items-end'>
                    {/* button */}
                    <div className='flex'>
                        <IconContext.Provider value={{ color: "white", size: "1.2rem" }}>
                            <a href="https://github.com/jasonchanhk" target="_blank" rel="noreferrer">
                                <div className='w-14 h-14 rounded-full bg-lime-400 border-2 border-white hover:bg-lime-500 active:bg-lime-600 flex justify-center items-center cursor-pointer'>
                                    <FiGithub />
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/jason-chan-361266217/" target="_blank" rel="noreferrer">
                                <div className='w-14 h-14 -ml-4 rounded-full bg-lime-400 border-2 border-white hover:bg-lime-500 active:bg-lime-600 flex justify-center items-center cursor-pointer'>
                                    <FiLinkedin />
                                </div>
                            </a>

                            <div
                                className='w-14 h-14 -ml-4 rounded-full bg-lime-400 border-2 border-white hover:bg-lime-500 active:bg-lime-600 flex justify-center items-center cursor-pointer'
                                onClick={copyEvent}
                            >
                                <MdEmail />
                            </div>

                            <div className='w-14 h-14 -ml-4 rounded-full bg-gray-200 border-2 border-white flex justify-center items-center'>
                                <IoChevronBack />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;