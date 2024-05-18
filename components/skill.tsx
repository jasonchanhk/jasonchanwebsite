import { ReactNode } from 'react'
import { SiReact, SiRedux, SiExpress, SiTypescript, SiNextdotjs, SiPython, SiFlask, SiMysql } from 'react-icons/si'

export interface skillItemsProps {
    name: string;
    icon: ReactNode;
}

export const skillItems: Array<skillItemsProps> = [
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
