import { IconContext } from "react-icons";
import { IoChevronForward } from 'react-icons/io5'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import RedirectButton from "./redirectButton";

export const About = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-stretch md:h-[40em] gap-8'>

            <div className='flex-1 bg-gray-50 p-2 grid grid-rows-2 grid-flow-col gap-2 rounded-2xl'>
                <div className='h-full w-full relative'>
                    <Image
                        src="/images/25d9f914-e4e4-4456-9972-caf87407d6aa.JPG"
                        alt="Picture of the author"
                        layout='fill'
                        objectFit="cover" // change to suit your needs
                        className="rounded-xl" />
                </div>
                <div className='h-full w-full relative'>
                    <Image
                        src="/images/Screenshot_2024-05-06_at_20.45.38-removebg-preview.PNG"
                        alt="Picture of the author"
                        layout='fill'
                        objectFit="cover" // change to suit your needs
                        className="rounded-xl grayscale" />
                </div>
                <div className='h-full w-full relative'>
                    <Image
                        src="/images/25d9f914-e4e4-4456-9972-caf87407d6aa.JPG"
                        alt="Picture of the author"
                        layout='fill'
                        objectFit="cover" // change to suit your needs
                        className="rounded-xl" />
                </div>
                <div className='h-full w-full relative'>
                    <Image
                        src="/images/25d9f914-e4e4-4456-9972-caf87407d6aa.JPG"
                        alt="Picture of the author"
                        layout='fill'
                        objectFit="cover" // change to suit your needs
                        className="rounded-xl" />
                </div>
            </div>
            <div className='flex-1 text-white text-lg p-2'>
                <div className={` ${styles.titletext} relative h-52 w-full whitespace-nowrap overflow-x-hidden`}>
                    <div className='absolute inset-0 font-extrabold text-8xl w-full z-0 text-lime-300/60'>
                        About <br/> me
                    </div>
                    <div className='absolute z-40 inset-0 text-white'>
                        <div className='flex-col'>
                            <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>01. </div>
                            <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide z-40'>
                                Who&nbsp;is&nbsp;
                                <span className='text-indigo-600'>Jason<br/>Chan?&nbsp;</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div>Year ago I moved to London looking for a new start. I challenged myself to code because I needed a breakthrough in life.</div>
                <RedirectButton />
            </div>
            {/* <div className='flex flex-col text-base font-light py-4 md:py-0 gap-4 text-amber-50 md:self-end md:pr-10 bg-white'>
                <div>Year ago I moved to London looking for a new start. I challenged myself to code because I needed a breakthrough in life.</div>
                <div>It was tough at first to study without any teaching guidance. Yet I soon managed to utilize free online resources constructing my own curriculum and learning system, which brought me tremendous joy and satisfaction.  </div>
                <div>I was greatly encouraged by the fact that programming is for everyone and equal to everyone who is hard-working.</div>
            </div>
            <div className='flex flex-col md:flex-row justify-end gap-4 bg-white'>
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
            </div> */}
        </div>
    )
}

