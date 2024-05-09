import { ReactNode } from 'react'
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMysql } from 'react-icons/si'

export interface skillItemsProps {
    name: string;
    icon: ReactNode;
}

export const skillItems: Array<skillItemsProps> = [
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
