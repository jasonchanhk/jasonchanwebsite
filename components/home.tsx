import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { IconContext } from "react-icons";

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='text-amber-800 basis-2/3'>
                <h1 className={`font-thin text-xl ${styles.titletext}`}>- Hello there</h1>
                <h1 className={`font-light text-5xl md:text-7xl tracking-wider  ${styles.titletext} pt-2 leading-none`}>
                    <span className={`text-white ${styles.stroketext}`}>I'm Jason ch </span>
                </h1>
                <h1 className={`font-bold text-5xl md:text-7xl tracking-wider cursor-default ${styles.titletext} pt-2 leading-none`}>Full-Stack Developer</h1>
                <div className='text-base font-light pt-10 pb-4 md:py-10 md:w-3/4'>
                    Graduated from sociology, self-taught programming in the previous year, now working as an intern at a crypto start-up. Gain the most satisfaction adopting new skills and facilitating group communication. Passionate about Full Stack Javascript development.</div>
                <div className={`font-thin text-xl pb-4 flex items-center ${styles.titletext}`}>
                    <div className='flex gap-x-4'>
                        <IconContext.Provider value={{ color: "white", size: "0.8em", className: "cursor-pointer" }}>
                            <Link passHref href="https://github.com/jasonchanhk">
                                <div className='w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-800/80 active:bg-amber-900 flex justify-center items-center cursor-pointer'>
                                    <FiGithub />
                                </div>
                            </Link>

                            <Link passHref href="https://www.linkedin.com/in/jason-chan-361266217/">
                                <div className='w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-800/80 active:bg-amber-900 flex justify-center items-center cursor-pointer'>
                                    <FiLinkedin />
                                </div>

                            </Link>
                        </IconContext.Provider></div>
                </div>
            </div>
            <div className='basis-1/3  drop-shadow-lg '>
                <div className='relative w-72 h-96 md:w-96 md:h-[30rem] shadow-lg shadow-amber-800/50 hover:shadow-amber-800 rounded-md'>
                    <Image
                        src="/images/IMG_0528.jpg"
                        alt="Picture of the author"
                        layout='fill'
                        objectFit="cover" // change to suit your needs
                        className="rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default Home;