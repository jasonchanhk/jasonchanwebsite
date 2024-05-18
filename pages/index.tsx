import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/section'
import Layout from '../components/layout'
import Link from 'next/link'
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiCopy } from 'react-icons/fi'
import { IoChevronForward } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa'
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons";
import { projectItems } from '../components/project'
import { About } from '../components/about'
import { Experience } from '../components/experience'
import RedirectButton from '../components/redirectButton'
import Marquee from "react-fast-marquee";
import { skillItems } from '../components/skill'

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


        <Marquee
          className={`h-20 bg-indigo-600 text-white font-bold text-6xl md:text-4xl ${styles.titletext}`}
          autoFill={true}
          speed={20}
        >
          {skillItems.map(({ name, icon }) => {
            return (
              <div className='flex px-8'>
                <span className='pr-4'>{icon}</span>
                <span>{name}</span>
              </div>
            )
          })}
        </Marquee>

        <div id='about' className='bg-lime-400'>
          <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <About />
          </div>
        </div>

        <div id='experience'>
          <div className={`md:top-24 ${styles.titletext} text-black relative h-28 w-full whitespace-nowrap overflow-x-hidden`}>
            <div className='absolute inset-0 font-extrabold text-8xl w-full text-gray-100 z-0'>
              ducation & Work Experience My education
            </div>
            <div className='absolute z-40 inset-0 mx-auto flex justify-center'>
              <div className='flex-col'>
                <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>02. </div>
                <div className='font-bold text-3xl md:text-5xl mt-2 tracking-wide z-40'>
                  My&nbsp;
                  <span className='text-lime-400'>Education&nbsp;</span>
                  &&nbsp;
                  <span className='text-lime-400'>Work Experience </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <Experience />
          </div>
        </div>

        <div id='project' className='bg-lime-400 text-white'>
          <div className={`md:top-24 ${styles.titletext} text-black relative h-36 w-full whitespace-nowrap overflow-x-hidden`}>
            <div className='absolute inset-0 font-extrabold text-8xl w-full z-0 text-lime-300 opacity-50'>
              Latest Pojects
            </div>
            <div className='absolute z-40 inset-0 flex justify-between mx-auto max-w-7xl px-16 md:px-20 text-white'>
              <div className='flex-col'>
                <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>03. </div>
                <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide z-40'>
                  My&nbsp;
                  <span className='text-indigo-600'>Latest Projects&nbsp;</span>
                </div>
              </div>
              <RedirectButton className='mt-10' />
            </div>

          </div>

          <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <div className='flex flex-col md:flex-row  md:items-stretch md:min-h-[40rem] gap-x-4'>
              {
                projectItems.map(({ name, description, position, link, image }, index) => {

                  return (
                    <div className={`py-4 md:py-0 flex-1 text-amber-50 ${position}`} key={index} >
                      <div className='h-px w-full bg-amber-50'></div>
                      <div className='flex'>
                        <div className='basis-5/6'>
                          <div className={`font-semibold text-3xl py-4 tracking-wider ${styles.titletext}`}>{name}</div>
                          <div className='font-light text-sm pt-1 pb-4'>{description}</div>
                        </div>
                        <div className='flex justify-center py-5 basis-1/6'>
                          <Link passHref href={`${link}`}>
                            <div className='border border-amber-50 hover:bg-amber-800/10 active:bg-amber-800/20  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
                              <IconContext.Provider value={{ color: "rgb(255 251 235)", size: "1em", className: 'hover: text-amber-800' }}>
                                <IoChevronForward />
                              </IconContext.Provider>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {image ?
                        <div className='relative w-full h-72 rounded-md shadow-lg shadow-amber-800/50 cursor-pointer hover:shadow-amber-800/70 active:shadow-amber-800'>
                          <Link passHref href={`${link}`}>
                            <Image
                              src={image}
                              alt={name}
                              layout='fill'
                              objectFit="cover"
                              className='rounded-md' />
                          </Link>
                        </div> :
                        <div className='h-52 bg-slate-100'></div>}
                    </div>
                  )
                })
              }
            </div>
          </div>
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
