import React, { useState, useEffect, ReactNode } from "react";
import { experienceItemsProps } from "./experienceContent";

import { IconContext } from "react-icons";
import { MdOutlineWork, MdClear } from "react-icons/md";

interface ExperienceModalProps {
    className?: string;
    children?: ReactNode;
    item: experienceItemsProps
}

const ExperienceModal = ({ className, children, item }: ExperienceModalProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        if (showModal) {
            document.documentElement.style.overflow = "hidden"
        } else {
            document.documentElement.style.overflow = ""
        }
    }, [showModal]);

    return (
        <>
            <div className={className} onClick={() => setShowModal(true)}>
                {children}
            </div>
            {(showModal && item.skills) ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none">

                                <div className="flex justify-between">
                                    <div className='bg-lime-400 rounded-full w-16 h-16 flex items-center justify-center mb-8'>
                                        <IconContext.Provider value={{ size: "1.25em" }}>
                                            <span className='text-white font-medium text-3xl z-20'>
                                                <MdOutlineWork />
                                            </span>
                                        </IconContext.Provider>
                                    </div>
                                    <MdClear className="cursor-pointer" onClick={() => setShowModal(false)}/>
                                </div>


                                <div className='relative flex mb-3 justify-between'>
                                    <div className='flex-col'>
                                        <div className=' justify-between items-center'>
                                            <h2 className="text-2xl font-medium pb-2">{item.title}</h2>
                                            <h3 className='text-lg font-light text-gray-800'>{item.place}</h3>
                                        </div>
                                    </div>

                                    <div className='flex text-md text-right font-medium bg-white rounded-lg pt-2 h-fit'>
                                        <div>{item.fromMonth} {item.fromYear} - {item.toMonth} {item.toYear}</div>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <ul className="list-disc pl-5">
                                        {item.skills.map((skill, index) => {
                                            return (
                                                <li className="py-1 text-balance" key={index}>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => console.log('clicking background')}></div>
                </>
            ) : null}
        </>
    );
}

export default ExperienceModal