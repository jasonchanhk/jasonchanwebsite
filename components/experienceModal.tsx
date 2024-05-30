import React, { useState, useEffect, ReactNode } from "react";
import { experienceItemsProps } from "./experienceContent";


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
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white p-10 outline-none focus:outline-none">

                                {/*body*/}
                                <div className='relative flex mb-8 justify-between'>
                                    <div className='flex-col'>
                                        <div className=' justify-between items-center'>
                                            <h2 className="text-2xl font-medium pb-2">{item.title}</h2>
                                            <h3 className='text-lg font-light text-gray-800'>{item.place}</h3>
                                        </div>
                                    </div>

                                    <div className='flex text-lg text-right font-medium bg-white rounded-lg p-2 h-fit'>
                                        <div>{item.fromMonth} {item.fromYear} - {item.toMonth} {item.toYear}</div>
                                    </div>
                                </div>
                                <div>
                                    <ul className="list-disc pl-5">
                                        {item.skills.map((skill) => {
                                            return (
                                                <li className="py-1">{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
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