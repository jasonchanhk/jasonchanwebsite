import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/section'
import Layout from '../components/layout'
import Link from 'next/link'
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiCopy } from 'react-icons/fi'
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMysql } from 'react-icons/si'
import { IoChevronForward } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IconContext } from "react-icons";



interface experienceItemsProps {
  from: string;
  to: string;
  title: string;
  place: string;
  skills?: Array<string>
}

interface projectItemsProps {
  name: string;
  description: string;
  position: string;
  image?: string;
  link?: string
}

interface skillItemsProps {
  name: string;
  icon: ReactNode;
}

const skillItems: Array<skillItemsProps> = [
  {
    name: 'React',
    icon: <SiReact />
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs />
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />
  },
  {
    name: 'MySQL',
    icon: <SiMysql />
  }
]

const experienceItems: Array<experienceItemsProps> = [
  {
    from: 'Nov, 2022',
    to: 'Present',
    title: 'Associate Developer',
    place: 'Yoox Net-A-Porter Group, London',
    skills: [
      "Revised our customised bulk reserve and promotion offers features on Salesforce, allowing our agent to personalise deals and discounts for VIPs",
      "Introduced performance monitoring metrics into casework, provided tracking statistics on reference articles usage and case closing efficiency",
      "Handled general user inquiries, analyzed and discovered new bugs. Documented all findings to enrich team knowledge"
    ]
  },
  {
    from: 'Nov, 2021',
    to: 'Apr, 2022',
    title: 'Frontend Developer (Internship)',
    place: 'Blokbot, London',
    skills: [
      'Pair-programmed a new user dashboard visualizing live crypto market data, trading bot performance, and customer portfolio', 
      'Researched on user management services migration, created report analyzing JWT, Auth0 and AWS Cognito',
      'Updated company’s React-Next-Typescript homepage interface regularly, discussed implementation with web designer'
    ]
  },
  {
    from: 'Jun, 2021',
    to: 'Nov, 2021',
    title: 'Self-taught Programming',
    place: 'Coursera, Youtube and StackOverflow'
  },
  {
    from: 'Jan, 2020',
    to: 'Jun, 2021',
    title: 'District Councilor ',
    place: 'Eastern District Council, Hong Kong',
    skills: [
      "Founded the pandemic support program and facilitated cross-government collaboration. Vetting for the working group to ensure fair use of emergency reserve.",
      "Actively consulted community stakeholders' opinions in social events such as parent-teacher day, cyclist events, and knitting workshops. Ensuring quality first-hand advice from all walks of life.",
      "Advised on council’s public facilities improvement projects, revamping youth center, sport ground, and roads"
    ]
  },
  {
    from: 'Sep, 2015',
    to: 'Jun, 2019',
    title: 'Bachelor in Social Science (Sociology)',
    place: 'The Chinese University of Hong Kong'
  },
]

const projectItems: Array<projectItemsProps> = [
  {
    name: 'MountCrypto',
    description: 'User dashboard displaying up-to-date statistic and news, built with React, Next, Tailwind CSS and Chart.js',
    position: 'md:self-end',
    link: 'https://mountain-crypto.vercel.app/',
    image: "/images/mountcrypto-demo-01.jpg"
  },
  {
    name: 'HK Bee Van United',
    description: 'Take delivery order and broadcast to drivers for matching, built with Node and Telegram Bot API ',
    position: 'md:self-center',
    link: 'https://t.me/HKBeeVanUtd_bot',
    image: "/images/BVan_demo-01.jpg"
  },
  {
    name: 'Gym Beginner Gym',
    description: 'Provide overall health knowledge for gym beginner, built with React, Bootstrap 5, Rapid API',
    position: 'md:self-start',
    link: 'https://jasonchanhk.github.io/gymbeginnergym/#/home',
    image: "/images/gbg-demo-01.jpg"
  },
]



const Home: NextPage = () => {

  const [open, setOpen] = useState<string>()
  
  return (
    <Layout title="Jason Chan">

      <div>
        <Section id='home'>
          <div className='flex flex-col md:flex-row'>
            <div className='text-amber-800 basis-2/3'>
              <h1 className={`font-thin text-xl ${styles.titletext}`}>Hi, my name is</h1>
              <h1 className={`font-light text-5xl md:text-7xl tracking-wider cursor-default hover:italic ${styles.titletext}`}>Jason Chan.</h1>
              <h1 className={`font-light text-5xl md:text-7xl tracking-wider  ${styles.titletext} pt-2 leading-none`}>
                <span className={`text-white ${styles.stroketext}`}>I am a </span>
                <span className='hover:italic cursor-default'>full-stack</span>
              </h1>
              <h1 className={`font-light text-5xl md:text-7xl tracking-wider cursor-default hover:italic ${styles.titletext} pt-2 leading-none`}>developer.</h1>
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

                    <Link passHref href="https://www.instagram.com/chanjky97/">
                      <div className='w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-800/80 active:bg-amber-900 flex justify-center items-center cursor-pointer'>
                        <FiInstagram />
                      </div>
                    </Link>

                    <Link passHref href="https://twitter.com/JC_hkuk">
                      <div className='w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-800/80 active:bg-amber-900 flex justify-center items-center cursor-pointer'>
                        <FiTwitter />
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
        </Section>

        <Section id='about' index={1} colored={true}>
          <div className='flex flex-col md:flex-row md:items-stretch md:h-[40em] gap-4'>
            <div className='basis-1/3 flex flex-col text-base font-light py-4 md:py-0 gap-4 text-amber-50 md:self-end md:pr-10'>
              <div>Year ago I moved to London looking for a new start. I challenged myself to code because I needed a breakthrough in life.</div>
              <div>It was tough at first to study without any teaching guidance. Yet I soon managed to utilize free online resources constructing my own curriculum and learning system, which brought me tremendous joy and satisfaction.  </div>
              <div>I was greatly encouraged by the fact that programming is for everyone and equal to everyone who is hard-working.</div>
            </div>
            <div className='basis-2/3 flex flex-col md:flex-row justify-end gap-4'>
              <div className='flex flex-col gap-4'>
                <div className='h-[26rem] w-full relative shadow-lg shadow-amber-800/50 hover:shadow-amber-800 rounded-md'>
                  <Image
                    src="/images/25d9f914-e4e4-4456-9972-caf87407d6aa.JPG"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit="cover" // change to suit your needs
                    className="rounded-md " />
                </div>
                <div className='h-[20rem] w-72 md:w-80 relative shadow-lg shadow-amber-800/50 hover:shadow-amber-800 rounded-md'>
                  <Image
                    src="/images/IMG_0873.jpg"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit="cover" // change to suit your needs
                    className="rounded-md object-none origin-top" />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='h-[20rem] w-72 md:w-80 relative shadow-lg shadow-amber-800/50 hover:shadow-amber-800 rounded-md'>
                  <Image
                    src="/images/IMG_2139.jpg"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit="cover" // change to suit your needs
                    className="rounded-md" />
                </div>
                <div className='h-[26rem] w-full relative shadow-lg shadow-amber-800/50 hover:shadow-amber-800 rounded-md'>
                  <Image
                    src="/images/IMG_3597.jpg"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit="cover" // change to suit your needs
                    className="rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id='experience' index={2} >
          <div className='flex flex-col md:flex-row md:items-stretch md:min-h-[40rem] gap-4'>
            <div className='flex-1 md:self-end '>
              <div className={`text-amber-800 font-semibold text-2xl py-4 tracking-wider ${styles.titletext}`}>Skills</div>
              <IconContext.Provider value={{ size: "1.125em" }}>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {skillItems.map(({ name, icon }, index) => {
                    return (
                      <div className='' key={index}>
                        <div className='bg-amber-800 rounded-full w-16 h-16  flex items-center justify-center'>
                          <span className='text-white font-medium text-3xl z-20'>{icon}</span>
                        </div>
                        <div className=' pt-2 text-lg text-amber-800 font-medium'>{name}</div>
                      </div>)
                  })}
                </div>
              </IconContext.Provider>
            </div>
            <div className='flex-1'>
              <div className={`text-amber-800 font-semibold text-2xl py-4 tracking-wider ${styles.titletext}`}>History</div>
              {experienceItems.map(({ from, to, title, place, skills }, index) => {
                return (
                  <div key={index} className='text-amber-800'>
                    <div className='h-px w-full bg-amber-800'></div>
                    <div className='flex my-4'>
                      <div className='font-semibold text-sm basis-1/3'>{from} - {to}</div>
                      <div className='font-bold text-lg basis-2/3'>
                        <div className='flex justify-between items-center'>
                          <h1>{title}</h1>
                          <IconContext.Provider value={{ size: "0.8em", className: "cursor-pointer md:inline-block hidden" }}>
                            {skills && <div onClick={() => setOpen(title)}><AiOutlineCaretDown /></div>}
                          </IconContext.Provider>
                        </div>
                        <h1 className='text-base font-light pt-1'>{place}</h1>
                        {open === title && <ul className={`pl-6 list-disc mt-4 md:block hidden `}>
                          {skills && skills.map((string, index) => {
                            return <li className={`font-light text-sm`} key={index}>{string}</li>
                          })
                          }
                        </ul>
                        }
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Section>

        <Section id='project' index={3} colored={true}>
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
        </Section>

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
                </div>

              </IconContext.Provider>

            </div>
          </div>
        </Section>

      </div>
    </Layout>
  )
}

export default Home
