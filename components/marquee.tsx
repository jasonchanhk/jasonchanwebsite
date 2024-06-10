import { ReactNode } from 'react'
import Marquee from "react-fast-marquee";

import styles from '../styles/Home.module.css'
import { SiReact, SiRedux, SiTypescript, SiNextdotjs, SiPython, SiFlask, SiMysql } from 'react-icons/si'

interface skillItemsProps {
    name: string;
    icon: ReactNode;
}

const skillItems: Array<skillItemsProps> = [
    {
        name: 'Typescript',
        icon: <SiTypescript />
    },
    {
        name: 'React',
        icon: <SiReact />
    },
    {
        name: 'Redux',
        icon: <SiRedux />
    },
    {
        name: 'Next',
        icon: <SiNextdotjs />
    },
    {
        name: 'Python',
        icon: <SiPython />
    },
    {
        name: 'Flask',
        icon: <SiFlask />
    },
    {
        name: 'MySQL',
        icon: <SiMysql />
    }
]

const TechMarquee = () => {
    return (<Marquee
        className={`bg-indigo-600 text-white font-bold text-2xl md:text-4xl ${styles.titletext} tracking-wide py-4`}
        autoFill={true}
        speed={20}
    >
        {skillItems.map(({ name, icon }, index) => {
            return (
                <div className='flex px-4 md:px-10 items-center' key={index}>
                    <span className='pr-2 md:pr-4'>{icon}</span>
                    <span>{name}</span>
                </div>
            )
        })}
    </Marquee>)
}

export default TechMarquee;