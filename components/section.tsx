import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-scroll'
import styles from './section.module.css'

type Props = {
    children?: ReactNode
    id?: string
    colored?: boolean
    classname?: string
}

const Section = ({ children, id, colored, classname }: Props) => {
    return (
        <div id={id} className={`${colored && 'bg-lime-500 text-white'} ${classname}`}>
            {children}
        </div>)
}

export default Section