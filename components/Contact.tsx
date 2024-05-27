import React from 'react'
import styles from '../styles/Home.module.css'
import RedirectButton from './redirectButton'
import Link from 'next/link'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons";

const Contact = () => {
    return (
        <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <div className='flex flex-col md:flex-row md:items-stretch md:h-[40em] gap-8'>
                <div className='flex-1 text-black text-lg p-2'>
                    <ContactTitle />
                    <Invitation />
                    <ContactList />
                </div>
                <div className='flex-1 text-black text-lg p-2d'>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <input type="text" placeholder='First Name' className='bg-gray-50 p-5 rounded-2xl' />
                        <input type="text" placeholder='Last Name' className='bg-gray-50 p-5 rounded-2xl' />
                        <input type="text" placeholder='Email' className='bg-gray-50 p-5 rounded-2xl' />
                        <input type="text" placeholder='Phone Number' className='bg-gray-50 p-5 rounded-2xl' />
                        <input type="text" placeholder='Subject' className='bg-gray-50 col-span-2 p-5 rounded-2xl' />
                        <textarea name="" id="" placeholder='Message' className='bg-gray-50 col-span-2 p-5 rounded-2xl h-52' ></textarea>
                    </div>

                    <RedirectButton className='mt-10 bg-lime-400'>
                        Send Message
                    </RedirectButton>
                </div>
            </div>
        </div>
    )
}


const Invitation = () => {
    return (
        <div>
            Year ago I moved to London looking for a new start. I challenged myself to code because I needed a breakthrough in life.
        </div>
    )
}

const ContactTitle = () => {
    return (
        <div className={` ${styles.titletext} relative h-52 w-full whitespace-nowrap overflow-x-hidden`}>
            <div className='absolute inset-0 font-extrabold text-8xl w-full z-0 text-gray-50'>
                Contact
            </div>
            <div className='absolute z-40 inset-0 text-black'>
                <div className='flex-col'>
                    <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>04. </div>
                    <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide z-40'>
                        Let&apos;s&nbsp;

                        <span className='text-lime-400'>Connect</span>&nbsp;&
                        <br />
                        <span className='text-lime-400'>Collaborate</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

const ContactList = () => {
    return (
        <IconContext.Provider value={{ color: "white", size: "1.2em", className: "cursor-pointer" }}>
            <div className='flex flex-col gap-4 pt-10 md:self-end '>

                <div className='flex items-center' onClick={() => { navigator.clipboard.writeText('chanjky97@gmail.com') }}>
                    <div className='w-14 h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                        <MdEmail />
                    </div>
                    <div className='pl-2'>chanjky97@gmail.com</div>
                </div>

                <Link passHref href="https://github.com/jasonchanhk">
                    <div className='flex items-center'>
                        <div className='w-14 h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                            <FiGithub />
                        </div>
                        <div className='pl-2'>github.com/jasonchanhk</div>
                    </div>
                </Link>

                <Link passHref href="https://www.linkedin.com/in/jason-chan-361266217/">

                    <div className='flex items-center'>
                        <div className='w-14 h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                            <FiLinkedin />
                        </div>
                        <div className='pl-2'>linkedin.com/in/jasonchanky</div>
                    </div>
                </Link>

                <div className='flex items-center'>
                    <div className='w-14 h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                        <IoLocationSharp />
                    </div>
                    <div className='pl-2'>Richmond, London</div>
                </div>
            </div>

        </IconContext.Provider>
    )
}

export default Contact
