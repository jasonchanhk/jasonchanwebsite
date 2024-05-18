import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import Section from '../components/section'
import Layout from '../components/layout'
import { FiGithub, FiLinkedin, FiCopy } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons";

import { About } from '../components/about'

import ExperienceContent from '../components/experienceContent'
import ProjectHeader from '../components/projectHeader'

import ProjectContent from '../components/projectContent'
import ExperienceHeader from '../components/experienceHeader'

import TechMarquee from '../components/marquee'

import HomePortrait from '../components/homePortrait'
import HomeContent from '../components/homeContent'

const Home: NextPage = () => {

  return (
    <Layout title="Jason Chan">

        <Section id='home' classname='relative'>
          <HomeContent />
          <HomePortrait />
        </Section>

        <TechMarquee />

        <Section id='about' colored={true}>
          <About />
        </Section>

        <Section id='experience'>
          <ExperienceHeader />
          <ExperienceContent />
        </Section>

        <Section id='project' colored={true}>
          <ProjectHeader />
          <ProjectContent />
        </Section>

        <Section id='contact'>
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


    </Layout >
  )
}

export default Home
