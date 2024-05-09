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
                <div className={` h-24 px-6 md:px-12 text-black flex justify-between items-center ${styles.titletext}`}>

                    <div className={`flex items-center cursor-pointer font-extrabold text-3xl ${styles.titletext}`}>
                        <Scrolllink to={'home'} spy={true} smooth={true} className=' hover:text-gray-500 active:text-gray-200'>
                            <span onClick={() => console.log(showSidebar)}>J</span>
                        </Scrolllink>
                    </div>
                    <div className='sm:flex flex-row items-center space-x-5 hidden'>
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <button key={index}>
                                        <Scrolllink to={item} spy={true} smooth={true} className=' hover:text-lime-400/80 active:text-lime-400/60'>
                                            <span className='font-medium'>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                        </Scrolllink>
                                    </button>
                                )
                            })
                        }
                        <a href='Jason Chan Resume.pdf'>
                            <button className='px-4 py-2 border rounded-md border-lime-400 font-medium hover:text-lime-400/80 hover:border-lime-400/80 active:bg-lime-400 active:text-white'>
                                Resume
                            </button>
                        </a>
                    </div>
                    <div className='inline-block items-center sm:hidden'>

                        <IconContext.Provider value={{ size: "2em", className: "cursor-pointer" }}>
                            <button onClick={() => { setShowSidebar(!showSidebar) }}>
                                <FiMenu />hi
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
        </div >

    )
}

export default Layout