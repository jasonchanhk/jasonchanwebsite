import Image from 'next/image'
import Link from 'next/link'

import { IconContext } from "react-icons";
import { IoChevronForward } from 'react-icons/io5'
import styles from '../styles/Home.module.css';

interface projectItemsProps {
    name: string;
    description: string;
    position: string;
    image?: string;
    link?: string
}

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

const ProjectContent = () => {
    return(
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
    )
}

export default ProjectContent