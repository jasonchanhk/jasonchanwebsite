import React, { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import Hotjar from '@hotjar/browser';

import { Link as Scrolllink } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
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

    useEffect(() => {
        Hotjar.init(5023668, 6);
    }, [])
    return (
        <div className='relative tracking-wide'>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/images/logo-new.png" />
            </Head>

            {/* navbar with responsiveness */}
            <header className={` bg-white sticky top-0 z-30 ease-in-out duration-300  ${navClassList ? "translate-y-0" : "-translate-y-full"}`}>
                <div className={` h-24 px-6 md:px-12 text-black flex justify-between items-center ${styles.titletext}`}>

                    <div className={`flex items-center cursor-pointer font-extrabold text-3xl ${styles.titletext}`}>
                        <Scrolllink to={'home'} spy={true} smooth={true} className=' text-black hover:text-lime-500 hover:underline underline-offset-4'>
                            <span>J</span>
                        </Scrolllink>
                    </div>
                    <div className='sm:flex flex-row items-center space-x-5 hidden'>
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <button key={index}>
                                        <Scrolllink to={item} spy={true} smooth={true} className=' hover:text-lime-500 hover:underline underline-offset-4 '>
                                            <span className='font-medium capitalize'>{item}</span>
                                        </Scrolllink>
                                    </button>
                                )
                            })
                        }
                        <a href='Jason Chan Resume 2024.pdf'>
                            <button className='px-8 py-2 rounded-full text-white bg-lime-500 font-medium hover:bg-lime-400'>
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
            <div className={`top-0 right-0 w-80 bg-white p-10 text-black fixed h-full z-40 flex flex-col ease-in-out duration-300 ${styles.titletext} ${showSidebar ? "translate-x-0" : "translate-x-full"}`}>

                <IconContext.Provider value={{ size: "2.25em" }}>
                    <button className="cursor-pointer top-10 right-10 absolute" onClick={() => setShowSidebar(!showSidebar)}>
                        <FiX />
                    </button>
                </IconContext.Provider>
                <div className='flex flex-col gap-y-12 h-full justify-center items-center'>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <button className='active:text-lime-500 active:underline underline-offset-4 ' key={index}>
                                    <Scrolllink to={item} spy={true} smooth={true} onClick={() => setShowSidebar(!showSidebar)}>
                                        <span className='font-medium capitalize'>{item}</span>
                                    </Scrolllink>
                                </button>
                            )
                        })
                    }

                    <button className={`px-8 py-2 border ${styles.titletext} font-mediumborder-lime-400 rounded-full text-white bg-lime-500 font-medium active:bg-white active:border-black active:text-black active:underline underline-offset-4`}>Resume</button>
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