import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/section'
import Layout from '../components/layout'
import Link from 'next/link'
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiCopy } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons";
// import { projectItems } from '../components/projectContent'
import { About } from '../components/about'
import { ExperienceContent } from '../components/experienceContent'
import RedirectButton from '../components/redirectButton'
import ProjectHeader from '../components/projectHeader'
import ProjectContent from '../components/projectContent'
import ExperienceHeader from '../components/experienceHeader'
import TechMarquee from '../components/marquee'

const Home: NextPage = () => {

  const copyEvent = () => {
    navigator.clipboard.writeText('chanjky97@gmail.com');
    alert('Email copied to clipboard');
  }
  return (
    <Layout title="Jason Chan">

      <div>
        {/* <Section id='home'>
          <div className='flex flex-col'>
            <div className='flex justify-center text-2xl'>
              <div className='flex items-center pb-6'>
                <div className='bg-lime-400 h-1 w-4 mr-3'></div>
                <div className='inline-block'>Hello</div>
              </div>
            </div>
            <div className={`font-bold text-6xl md:text-8xl ${styles.titletext}`}>
              <div className='flex justify-center'>
                I'm&nbsp;
                <div className='inline-block text-lime-400'>
                  Jason,
                  <div className='bg-lime-400 h-2'></div>
                </div>
              </div>
              <div className='flex justify-center'>Software Engineer</div>
            </div>
          </div>

          <Image
            src="/images/portrait-removebg-1.png"
            alt="Picture of the author"
            height={500}
            width={500}
            layout='fixed'
            objectFit="cover" // change to suit your needs
            className="rounded-md" />
        </Section> */}

        <div id='home' className='relative'>
          <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <div className='flex flex-col'>
              <div className='flex justify-center text-2xl'>
                <div className='flex items-center pb-6'>
                  <div className='bg-lime-400 h-1 w-4 mr-3'></div>
                  <div className='inline-block'>Hello</div>
                </div>
              </div>
              <div className={`font-bold text-6xl md:text-8xl ${styles.titletext}`}>
                <div className='flex justify-center'>
                  I'm&nbsp;
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
                    <a href="https://github.com/jasonchanhk" target="_blank">
                      <div className='w-14 h-14 rounded-full bg-lime-400 border-2 border-white hover:bg-lime-500 active:bg-lime-600 flex justify-center items-center cursor-pointer'>
                        <FiGithub />
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/in/jason-chan-361266217/" target="_blank">
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
          <div className='absolute z-20 inset-0 mx-auto flex justify-center items-end'>
            <Image
              src="/images/portrait-removebg-4.png"
              alt="Picture of the author"
              height={600}
              width={600}
              layout='fixed'
              objectFit="cover" />
          </div>

        </div>


        <TechMarquee />

        <div id='about' className='bg-lime-400'>
          <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <About />
          </div>
        </div>

        <div id='experience'>
          <ExperienceHeader />
          <ExperienceContent />
        </div>

        <div id='project' className='bg-lime-400 text-white'>
          <ProjectHeader />
          <ProjectContent />
        </div>

        <Section id='contact' index={4}>
          <div className='flex flex-col md:flex-row md:items-stretch md:min-h-[36rem] gap-4'>
            <div className='basis-2/3 md:self-end text-amber-800 pt-10 md:pt-0'>

              <h1 className={`font-thin text-md md:text-xl ${styles.titletext}`}>Looking for opportunities as</h1>
              <h1 className={`md:font-light text-5xl md:text-7xl tracking-wider cursor-default hover:italic ${styles.titletext} pt-2 leading-none`}>
                Frontend developer
              </h1>
            </div>

            <div className='basis-1/3 text-amber-800 flex flex-col justify-between'>
              <div className='flex py-4 md:py-0 md:self-end font-light md:text-right'>
                It is always known that self-learning requires strict discipline and great strength of will.<br />
                I believe my passion as a developer could help me to overcome any difficulties at the position.
              </div>
              <IconContext.Provider value={{ color: "white", size: "1em", className: "cursor-pointer" }}>
                <div className='flex flex-col gap-4 pt-10 md:self-end '>

                  <div className='flex justify-end items-center border border-amber-800 rounded-full hover:bg-amber-800/10 active:bg-amber-800/20 w-fit cursor-pointer' onClick={() => { navigator.clipboard.writeText('chanjky97@gmail.com') }}>
                    <div className='w-8 h-8 rounded-full bg-amber-800 flex justify-center items-center'>
                      <MdEmail />
                    </div>
                    <div className='pl-2 pr-2 font-light'>chanjky97@gmail.com</div>
                    <IconContext.Provider value={{ color: "rgb(146 64 14)", size: "0.7em", className: "cursor-pointer" }}>
                      <span className='pr-4'>
                        <FiCopy />
                      </span>
                    </IconContext.Provider>
                  </div>

                  <Link passHref href="https://www.facebook.com/jason.chan.7">
                    <div className='flex items-center border border-amber-800 rounded-full w-fit cursor-pointer hover:bg-amber-800/10 active:bg-amber-800/20 '>
                      <div className='w-8 h-8 rounded-full bg-amber-800 flex justify-center items-center'>
                        <FaFacebookF />
                      </div>
                      <div className='pl-2 pr-4 font-light'>facebook.com/jason.chan.7</div>
                    </div>
                  </Link>

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
                  </IconContext.Provider>
                </div>

              </IconContext.Provider>

            </div>
          </div>
        </Section>

      </div>
    </Layout >
  )
}

export default Home
