import { useState } from "react";
import styles from '../styles/Home.module.css';

import { IoChevronForward, IoChevronBack } from 'react-icons/io5'
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";


export interface experienceItemsProps {
    fromYear: string;
    fromMonth: string;
    toYear: string;
    toMonth: string;
    title: string;
    place: string;
    skills?: Array<string>
}

interface itemsListProps {
    items: Array<experienceItemsProps>
}

const workExpItems: Array<experienceItemsProps> = [
    {
        fromYear: '2024',
        fromMonth: 'Nov',
        toYear: '2025',
        toMonth: 'Jul',
        title: 'Software Engineer',
        place: 'Stackcrafters @ Go Eve',
        skills: [
            "Built a two-way access request workflow that enables users to request access or admins to invite users joining the client with predefined permissions",
            "Captured hardware alert from MQTT server and presented them on our internal admin console, triggering further notifications to Microsoft Teams channel on critical issues",
            "Disabled permanent data deletion with archived and unarchived logic to improve fault analysis and accountability"
        ]
    },{
        fromYear: '2022',
        fromMonth: 'Nov',
        toYear: '2024',
        toMonth: 'Oct',
        title: 'Associate Developer',
        place: 'La Fosse @ Yoox Net-A-Porter Group',
        skills: [
            "Restructured legacy service level provision logic, allowing new loyalty tier to be created and assigned with the right level of support",
            "Introduced performance monitoring metrics into case management, tracked reply template usage, and case closing efficiency",
            "Organised case assignment rules from business, accommodated planned outstanding occasions or unpredicted emergencies"
        ]
    },
    {
        fromYear: '2021',
        fromMonth: 'Nov',
        toYear: '2022',
        toMonth: 'Apr',
        title: 'Frontend Developer Intern',
        place: 'Blokbot',
        skills: [
            'Applied regular UI updates to the company home page using React, Next, and TypeScript',
            'Integrated live crypto market data, trading bot performance, and customer portfolio to user dashboard',
            'Conducted a proof-of-concept on migrating our user management service to Auth0 or AWS Cognito'
        ]
    },
    {
        fromYear: '2020',
        fromMonth: 'Jan',
        toYear: '2021',
        toMonth: 'Jun',
        title: 'District Councilor',
        place: 'Eastern District Council',
        skills: [
            "Coordinated the pandemic support program and facilitated cross-government collaboration, overseeing task force expenses",
            "Engaged frequently with community stakeholders through council activities, collected direct public feedback on government policy"
        ]
    }
]

const educationExpItems: Array<experienceItemsProps> = [
    {
        fromYear: '2025',
        fromMonth: 'Jan',
        toYear: '2025',
        toMonth: 'Apr',
        title: 'Certified Cloud Practitioner',
        place: 'AWS Certification'
    },
    {
        fromYear: '2022',
        fromMonth: 'Jun',
        toYear: '2022',
        toMonth: 'Nov',
        title: 'Technical Trainee',
        place: 'La Fosse Academy'
    },
    {
        fromYear: '2015',
        fromMonth: 'Sep',
        toYear: '2019',
        toMonth: 'Jun',
        title: 'Bachelor in Social Science',
        place: 'The Chinese University of Hong Kong'
    },
]

const ItemsList = ({ items }: itemsListProps) => {

    const [experienceItem, setExperienceItem] = useState<experienceItemsProps | null>(null);

    return (
        <div>
            {
                experienceItem
                    ?
                    <div>
                        <div className='flex md:flex-row mb-4 md:mb-8 justify-between'>
                            <div className='flex flex-col'>
                                <h2 className="text-md md:text-2xl font-medium md:pb-2">{experienceItem.title}</h2>
                                <h3 className='text-sm md:text-lg font-light'>{experienceItem.place} / {experienceItem.fromMonth} {experienceItem.fromYear} - {experienceItem.toMonth} {experienceItem.toYear}</h3>
                                <div className='text-sm md:text-base font-light'></div>
                            </div>

                            <div className='rounded-full bg-lime-500 hover:bg-lime-400 text-white p-1 md:text-lg h-fit w-fit cursor-pointer'>
                                <IoChevronBack onClick={() => setExperienceItem(null)} />
                            </div>
                        </div>
                        <ul className="list-disc pl-5 text-xs md:text-sm">
                            {experienceItem.skills?.map((skill, index) => {
                                return (
                                    <li className="py-1 text-balance" key={index}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    :
                    <div>{items.map((item, index) => {
                        return (
                            <div key={index} className={`text-black ${item.skills ? 'cursor-pointer hover:text-gray-500' : ''}`} onClick={() => item.skills && setExperienceItem(item)}>
                                <div className='flex flex-col md:flex-row mb-4 md:mb-8 justify-between'>
                                    <div className='flex flex-col'>
                                        <h2 className="text-md md:text-2xl font-medium md:pb-2 flex items-center">
                                            {item.title}
                                            {item.skills && <span className="rounded-full bg-lime-500 hover:bg-lime-400 text-white p-1 ml-2 text-sm md:text-lg"><IoChevronForward /></span>}
                                        </h2>
                                        <h3 className='text-sm md:text-lg font-light flex items-center'>
                                            {item.place}
                                            {/* {item.skills && <span className="rounded-full bg-lime-500 text-white p-1 ml-2 text-sm md:text-lg"><IoChevronForward /></span>} */}
                                        </h3>
                                    </div>

                                    <div className='flex text-sm font-light md:text-lg md:text-right md:font-medium md:bg-white md:rounded-lg md:p-2 h-fit w-fit'>
                                        <div>{item.fromYear === item.toYear ? `${item.fromYear}`: `${item.fromYear} - ${item.toYear}`}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}</div>
            }
        </div>
    )
}

const ExperienceContent = () => {

    return (
        <div className={`py-12 md:py-24 mx-auto px-6 md:px-20 max-w-7xl`}>
            <div className='flex flex-col md:flex-row md:items-stretch md:min-h-7xl gap-8 md:pt-10'>
                <div className='flex-1 bg-gray-50 rounded-2xl p-6 md:p-10'>
                    <div className="flex items-center ">
                        <div className='bg-lime-500 rounded-full w-14 h-14 flex flex-none items-center justify-center text-white font-medium text-3xl z-20'>
                            <IoSchool />
                        </div>
                        <div className={`font-bold text-3xl md:py-4 pl-4 tracking-wide text-lime-500 ${styles.titletext}`}>
                            Education
                        </div>
                    </div>

                    <div className='h-px w-full bg-gray-200 mt-4 mb-6'></div>

                    < ItemsList items={educationExpItems} />
                </div>
                <div className='flex-1 bg-gray-50 rounded-2xl p-6 md:p-10'>
                    <div className="flex items-center">
                        <div className='bg-lime-500 rounded-full mr-2 w-14 h-14 flex flex-none items-center justify-center text-white font-medium text-3xl z-20'>
                            <MdOutlineWork />
                        </div>
                        <div className={`font-bold w-fit text-3xl md:py-4 tracking-wide text-lime-500 ${styles.titletext}`}>
                            Work Experience
                        </div>
                    </div>

                    <div className='h-px w-full bg-gray-200 mt-4 mb-6'></div>

                    < ItemsList items={workExpItems} />
                </div>
            </div>
        </div>
    )
}

export default ExperienceContent