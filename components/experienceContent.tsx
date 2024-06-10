import { useState } from "react";
import styles from '../styles/Home.module.css';

import { IconContext } from "react-icons";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

import ExperienceModal from "./experienceModal";


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
        fromYear: '2022',
        fromMonth: 'Nov',
        toYear: '2024',
        toMonth: 'Dec',
        title: 'Associate Developer',
        place: 'Yoox Net-A-Porter Group',
        skills: [
            "Revised our customised bulk reserve and promotion offers features on Salesforce, allowing our agent to personalise deals and discounts for VIPs",
            "Introduced performance monitoring metrics into casework, provided tracking statistics on reference articles usage and case closing efficiency",
            "Handled general user inquiries, analyzed and discovered new bugs. Documented all findings to enrich team knowledge"
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
            'Pair-programmed a new user dashboard visualizing live crypto market data, trading bot performance, and customer portfolio',
            'Researched on user management services migration, created report analyzing JWT, Auth0 and AWS Cognito',
            'Updated company’s React-Next-Typescript homepage interface regularly, discussed implementation with web designer'
        ]
    },
    {
        fromYear: '2020',
        fromMonth: 'Jan',
        toYear: '2021',
        toMonth: 'Jun',
        title: 'District Councilor ',
        place: 'Eastern District Council',
        skills: [
            "Founded the pandemic support program and facilitated cross-government collaboration. Vetting for the working group to ensure fair use of emergency reserve.",
            "Actively consulted community stakeholders' opinions in social events such as parent-teacher day, cyclist events, and knitting workshops. Ensuring quality first-hand advice from all walks of life.",
            "Advised on council’s public facilities improvement projects, revamping youth center, sport ground, and roads"
        ]
    }
]

const educationExpItems: Array<experienceItemsProps> = [
    {
        fromYear: '2021',
        fromMonth: 'Jun',
        toYear: '2021',
        toMonth: 'Nov',
        title: 'Technical Trainee',
        place: 'La Fosse Academy'
    },
    {
        fromYear: '2021',
        fromMonth: 'Jun',
        toYear: '2021',
        toMonth: 'Nov',
        title: 'Self-taught Programming',
        place: 'Coursera'
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
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <ExperienceModal key={index} className={`text-black ${item.skills ? 'cursor-pointer hover:text-gray-500' : ''}`} item={item}>
                        <div className='flex flex-col md:flex-row mb-4 md:mb-8 justify-between'>
                            <div className='flex flex-col'>
                                <h2 className="text-md md:text-2xl font-medium md:pb-2">{item.title}</h2>
                                <h3 className='text-sm md:text-lg font-light'>{item.place}</h3>
                            </div>

                            <div className='flex text-sm font-light md:text-lg md:text-right md:font-medium md:bg-white md:rounded-lg md:p-2 h-fit w-fit'>
                                <div>{item.fromYear} - {item.toYear}</div>
                            </div>
                        </div>
                    </ExperienceModal>
                )
            })}
        </div>
    )
}

const ExperienceContent = () => {

    return (
        <div className={`py-12 md:py-24 mx-auto px-6 md:px-20 max-w-7xl`}>
            <div className='flex flex-col md:flex-row md:items-stretch md:min-h-7xl gap-8 md:pt-10'>
                <div className='flex-1 bg-gray-50 rounded-2xl p-6 md:p-10'>
                    <div className="flex items-center ">
                        <div className='bg-lime-400 rounded-full w-14 h-14 flex flex-none items-center justify-center text-white font-medium text-3xl z-20'>
                            <IoSchool />
                        </div>
                        <div className={`font-bold text-3xl md:py-4 pl-4 tracking-wide text-lime-400 ${styles.titletext}`}>
                            Education
                        </div>
                    </div>

                    <div className='h-px w-full bg-gray-200 mt-4 mb-6'></div>

                    < ItemsList items={educationExpItems} />
                </div>
                <div className='flex-1 bg-gray-50 rounded-2xl p-6 md:p-10'>
                    <div className="flex items-center">
                        <div className='bg-lime-400 rounded-full mr-2 w-14 h-14 flex flex-none items-center justify-center text-white font-medium text-3xl z-20'>
                            <MdOutlineWork />
                        </div>
                        <div className={`font-bold w-fit text-3xl md:py-4 tracking-wide text-lime-400 ${styles.titletext}`}>
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