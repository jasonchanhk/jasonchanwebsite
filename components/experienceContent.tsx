import { useState } from "react";
import styles from '../styles/Home.module.css';

import { IconContext } from "react-icons";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

import ExperienceModal from "./experienceModal";
import Modal from "./test";


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
                    <ExperienceModal key={index} className={`text-black ${item.skills ? 'cursor-pointer':''}`} item={item}>
                        <div className='flex mb-8 justify-between'>
                            <div className='flex-col'>
                                <div className=' justify-between items-center'>
                                    <h2 className="text-2xl font-medium pb-2">{item.title}</h2>
                                    <h3 className='text-lg font-light text-gray-800'>{item.place}</h3>
                                </div>
                            </div>

                            <div className='flex text-lg text-right font-medium bg-white rounded-lg p-2 h-fit'>
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

    const [open, setOpen] = useState<string>()

    return (
        <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
            <div className='flex flex-col md:flex-row md:items-stretch md:min-h-7xl gap-8 pt-10'>
                <div className='flex-1 bg-gray-50 rounded-2xl p-10'>
                    <div className="flex items-center text-lime-400">
                        <div className='bg-lime-400 rounded-full w-14 h-14 flex items-center justify-center'>
                            <IconContext.Provider value={{ size: "1.125em" }}>
                                <span className='text-white font-medium text-3xl z-20'>
                                    <IoSchool />
                                </span>
                            </IconContext.Provider>
                        </div>
                        <div className={`font-bold text-3xl py-4 pl-4 tracking-wide ${styles.titletext}`}>
                            Education
                        </div>
                    </div>

                    <div className='h-px w-full bg-gray-200 mt-4 mb-6'></div>

                    < ItemsList items={educationExpItems} />
                    {/* <IconContext.Provider value={{ size: "1.125em" }}>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {skillItems.map(({ name, icon }, index) => {
                    return (
                      <div className='' key={index}>
                        <div className='bg-amber-800 rounded-full w-16 h-16  flex items-center justify-center'>
                          <span className='text-white font-medium text-3xl z-20'>{icon}</span>
                        </div>
                        <div className=' pt-2 text-lg text-amber-800 font-medium'>{name}</div>
                      </div>)
                  })}
                </div>
              </IconContext.Provider> */}
                </div>
                <div className='flex-1 bg-gray-50 rounded-2xl p-8'>
                    <div className="flex items-center text-lime-400">
                        <div className='bg-lime-400 rounded-full w-14 h-14 flex items-center justify-center'>
                            <IconContext.Provider value={{ size: "1.125em" }}>
                                <span className='text-white font-medium text-3xl z-20'>
                                    <MdOutlineWork />
                                </span>
                            </IconContext.Provider>
                        </div>
                        <div className={`font-bold text-3xl py-4 pl-4 tracking-wide ${styles.titletext}`}>
                            Work Experience
                        </div>
                    </div>

                    <div className='h-px w-full bg-gray-200 mt-4 mb-6'></div>

                    < ItemsList items={workExpItems} />
                    <Modal />
                </div>
            </div>
        </div>
    )
}

export default ExperienceContent