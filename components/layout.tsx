import React, { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link as Scrolllink } from 'react-scroll'
import Link from 'next/link'
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiCopy, FiMenu, FiX } from 'react-icons/fi'
import { IconContext } from "react-icons";
import useScrollListener from "../hooks/useScrollListener";
import styles from './layout.module.css'

type Props = {
    children?: ReactNode
    title: string
}

const menuItems = [
    'about', 'experience', 'project', 'contact',
];

const Layout = ({ children, title }: Props) => {

    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [navClassList, setNavClassList] = useState<boolean>(true);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
            setNavClassList(false);
        } else {
            setNavClassList(true);
        }
    }, [scroll.y, scroll.lastY]);

    return (
        <div className='relative tracking-wide'>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/images/logo.png" />
            </Head>

            {/* navbar with responsiveness */}
            <header className={` bg-white sticky top-0 z-30 ease-in-out duration-300  ${navClassList ? "translate-y-0" : "-translate-y-full"}`}>
                <div className={` h-24 px-6 md:px-12 text-amber-800 flex justify-between items-center ${styles.titletext}`}>

                    <div className={`flex items-center cursor-pointer font-extrabold text-3xl ${styles.titletext}`}>
                        <Scrolllink to={'home'} spy={true} smooth={true} className='hover:text-amber-800/60 active:text-amber-900'>
                            <span onClick={() => console.log(showSidebar)}>J</span>
                        </Scrolllink>
                    </div>
                    <div className='sm:flex flex-row items-center space-x-5 hidden'>
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <button key={index}>
                                        <Scrolllink to={item} spy={true} smooth={true} className='hover:text-amber-800/60 active:text-amber-900'>
                                            <span className='font-semibold text-lg pr-1 '>0{index + 1}.</span>
                                            <span className='font-medium'>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                        </Scrolllink>
                                    </button>
                                )
                            })
                        }
                        <a href='Jason Chan Resume.pdf'>
                            <button className='px-4 py-2 border rounded-md border-amber-800 font-medium hover:text-amber-800/60 hover:border-amber-800/60 active:text-amber-900 active:border-amber-900'>
                                Resume
                            </button>
                        </a>
                    </div>
                    <div className='inline-block items-center sm:hidden'>

                        <IconContext.Provider value={{ size: "2em", className: "cursor-pointer" }}>
                            <button onClick={() => { setShowSidebar(!showSidebar) }}>
                                <FiMenu />
                            </button>
                        </IconContext.Provider>
                    </div>
                </div>
            </header>

            {/* siderbar */}
            <div className={`top-0 right-0 w-80 bg-amber-50 p-10 text-amber-800 hover:text-amber-800/60 fixed h-full z-40 flex flex-col  font-medium ease-in-out duration-300 ${styles.titletext} ${showSidebar ? "translate-x-0" : "translate-x-full"}`}>

                <IconContext.Provider value={{ size: "2.25em" }}>
                    <button className="cursor-pointer top-10 right-10 absolute" onClick={() => setShowSidebar(!showSidebar)}>
                        <FiX />
                    </button>
                </IconContext.Provider>
                <div className='flex flex-col gap-y-12 h-full justify-center items-center tracking-widest'>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <button className=' tracking-widest' key={index}>
                                    <Scrolllink to={item} spy={true} smooth={true} onClick={() => setShowSidebar(!showSidebar)}>
                                        <span className='font-semibold text-lg'>0{index + 1}. </span><br />
                                        <span className='font-medium'>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                    </Scrolllink>
                                </button>
                            )
                        })
                    }

                    <button className='px-12 py-3 border rounded-md border-amber-800 hover:border-amber-800/60'>Resume</button>
                </div>
            </div>

            {/* children, can be disable when sidebar opened */}
            <div className={`${showSidebar ? 'blur-sm overflow-hidden pointer-events-none' : 'blur-none'}`}>
                {children}
            </div>

            {/* bottom right links */}
            {/* <div className='bottom-0 md:left-3 lg:left-7 fixed hidden md:block '>
                <div className='flex flex-col px-4 justify-center items-center space-y-4'>
                    <IconContext.Provider value={{ color: "rgb(146 64 14)",size: "1.25em", className: "cursor-pointer" }}>
                        <Link href="">
                            <div>
                                <FiGithub />
                            </div>

                        </Link>

                        <Link href="">
                            <div>
                                <FiLinkedin />
                            </div>

                        </Link>
                        <Link href="">
                            <div>
                                <FiInstagram />
                            </div>
                        </Link>
                        <Link href="">
                            <div>
                                <FiTwitter />
                            </div>
                        </Link>
                    </IconContext.Provider>

                    <span className='mt-4 w-px h-20 bg-amber-800 block'></span>
                </div>
            </div> */}

            {/* bottom right email */}
            {/* <div className='bottom-0 md:right-16 lg:right-20 fixed hidden md:block'>
                <div className='origin-bottom-right rotate-90 py-4 flex items-center'>


                    <span className='text-sm font-medium tracking-wider cursor-pointer hover:text-lime-600 active:text-lime-300 flex items-center' onClick={() => { navigator.clipboard.writeText('chanjky97@gmail.com') }}>
                        <IconContext.Provider value={{ size: "1em", className: "cursor-pointer -rotate-90 mr-2" }}>
                            <FiCopy />
                            chanjky97@gmail.com
                        </IconContext.Provider>
                    </span>
                    <span className='ml-4 h-px w-20 bg-black inline-block'></span>
                </div>
            </div> */}
        </div >

    )
}

export default Layout