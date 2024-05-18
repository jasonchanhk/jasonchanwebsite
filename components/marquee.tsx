import Marquee from "react-fast-marquee";
import { skillItems } from '../components/skill'

import styles from '../styles/Home.module.css'

const TechMarquee = () => {
    return (<Marquee
        className={`bg-indigo-600 text-white font-bold text-2xl md:text-4xl ${styles.titletext} tracking-wide py-4`}
        autoFill={true}
        speed={20}
    >
        {skillItems.map(({ name, icon }) => {
            return (
                <div className='flex px-4 md:px-8'>
                    <span className='pr-4'>{icon}</span>
                    <span>{name}</span>
                </div>
            )
        })}
    </Marquee>)
}

export default TechMarquee;