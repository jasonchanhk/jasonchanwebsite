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
        <div className={`${colored && 'bg-gradient-to-br from-amber-50 to-amber-800'}`}>
            <div id={id} className={`relative min-h-screen py-24 mx-auto max-w-7xl px-16 sm:px-20 `}>
                {id && index &&
                    <>
                        <div className={`md:top-24 md:absolute py-8 md:py-0 ${styles.titletext} text-amber-800`}>
                            <div className='font-semibold text-2xl underline tracking-wider underline-offset-8'>0{index}. </div>
                            <div className='font-light text-5xl md:text-7xl mt-2 tracking-wider italic'>{id.charAt(0).toUpperCase() + id.slice(1)}</div>
                        </div>
                    </>
                }
                {children}
            </div>
        </div>)
}

export default Section