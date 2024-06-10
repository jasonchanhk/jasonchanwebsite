import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import RedirectButton from './redirectButton'
import Link from 'next/link'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons";

import emailjs from '@emailjs/browser';
import { copyEvent } from '../utils/copyEvent'

const Contact = () => {
    return (
        <div className={`py-12 md:py-24 mx-auto px-6 md:px-20 max-w-7xl`}>
            <div className='flex flex-col md:flex-row md:items-stretch md:h-[40em] gap-8'>
                <div className='flex-1 text-black text-sm md:text-lg p-3'>
                    <ContactTitle />
                    <Invitation />
                    <ContactList />
                </div>
                <div className='hidden flex-1 text-black text-sm md:text-lg p-3 md:flex flex-col justify-end'>
                    <MessageForm />
                </div>
            </div>
        </div>
    )
}

const Invitation = () => {
    return (
        <div>
            Whether it's a new project, a brainstorming session, or just to chat, I'm all ears and interested. Let's create something awesome together. Look forward to hear from you!
        </div>
    )
}

const ContactTitle = () => {
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
        <div className={` ${styles.titletext} relative h-52 w-full whitespace-nowrap overflow-x-hidden`}>
            <div className='absolute inset-0 font-extrabold text-7xl md:text-8xl w-full z-0 text-gray-50'>
                Contact
            </div>
            <div className='absolute inset-0 text-black'>
                <div className='flex-col'>
                    <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 pt-10 md:pt-0'>04. </div>
                    <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide'>
                        Let&apos;s&nbsp;
                        {isMobile && <br />}
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
        <IconContext.Provider value={{ color: "white", size: "1.2em" }}>
            <div className='flex flex-col gap-3 pt-10 md:self-end'>

                <div className='flex items-center cursor-pointer w-fit' onClick={copyEvent}>
                    <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                        <MdEmail />
                    </div>
                    <div className='pl-2'>chanjky97@gmail.com</div>
                </div>

                <Link passHref href="https://github.com/jasonchanhk">
                    <div className='flex items-center cursor-pointer w-fit'>
                        <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                            <FiGithub />
                        </div>
                        <div className='pl-2'>github.com/jasonchanhk</div>
                    </div>
                </Link>

                <Link passHref href="https://www.linkedin.com/in/jason-chan-361266217/">
                    <div className='flex items-center cursor-pointer w-fit'>
                        <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                            <FiLinkedin />
                        </div>
                        <div className='pl-2'>linkedin.com/in/jasonchanky</div>
                    </div>
                </Link>

                <div className='flex items-center w-fit'>
                    <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-lime-400 border-2 border-white flex justify-center items-center'>
                        <IoLocationSharp />
                    </div>
                    <div className='pl-2'>Richmond, London</div>
                </div>
            </div>

        </IconContext.Provider>
    )
}

const MessageForm = () => {
    const form = useRef(null);
    const [messageStatus, setMessageStatus] = useState<string>('')

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const currentForm = form.current;
        if (currentForm == null) return;
        if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID == null ||
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID == null ||
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY == null
        ) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                currentForm,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                })
            .then(() => {
                setMessageStatus('Success!');
            })
            .catch((error) => {
                setMessageStatus('Failed...');
                console.log(error.text)
            }
            );
    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-5'>
                <input type="text" placeholder='First Name' className='bg-gray-50 p-5 rounded-2xl' name='firstname' />
                <input type="text" placeholder='Last Name' className='bg-gray-50 p-5 rounded-2xl' name='lastname' />
                <input type="text" placeholder='Email' className='bg-gray-50 p-5 rounded-2xl' name='email' />
                <input type="text" placeholder='Phone Number' className='bg-gray-50 p-5 rounded-2xl' name='phone' />
                <input type="text" placeholder='Subject' className='bg-gray-50 col-span-2 p-5 rounded-2xl' name='subject' />
                <textarea placeholder='Message' className='bg-gray-50 col-span-2 p-5 rounded-2xl h-52' name='message' />
            </div>
            <RedirectButton className='mt-10' coloured={true}>
                {messageStatus != '' ? <div className='cursor-default w-32 text-center'>{messageStatus}</div> : <button type="submit" className='cursor-pointer w-32 text-center'>Send Message</button>}
            </RedirectButton>
        </form>
    )
}

interface inputFormProps {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

export default Contact
