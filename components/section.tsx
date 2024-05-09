import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-scroll'
import styles from './section.module.css'

type Props = {
    children?: ReactNode
    id?: string
    colored?: boolean
    index?: number
}

const Section = ({ children, id, colored, index }: Props) => {
    return (
        <div className={`${colored && 'bg-lime-400'}`}>
            <div id={id} className={`relative min-h-screen py-24 mx-auto max-w-7xl px-16 md:px-20`}>
                {children}
            </div>
        </div>)
}

export default Section