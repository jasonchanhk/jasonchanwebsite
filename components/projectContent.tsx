import Image from 'next/image'

import styles from '../styles/Home.module.css';

interface projectItemsProps {
  name1: string;
  name2: string;
  description: string;
  image: string;
  link: string;
  imgLeft?: boolean;
  stack: string[]
}

const projectItems: Array<projectItemsProps> = [
  {
    name1: 'PlayLog - Basketball',
    name2: 'LiveStat Collection System',
    description: 'Simple tool to collect player game data from YouTube. You’ll get an overview of all action history and be able to export timestamps of important moments effortlessly.',
    link: 'https://playlog-beta.netlify.app/',
    image: "/images/PlayLog-demo.png",
    imgLeft: true,
    stack: ['TypeScript', 'React', 'Redux', 'Netlify']
  },
  {
    name1: 'MountCrypto -',
    name2: 'Crypto Trading Platform',
    description: 'Extensive trading experience here at MountCrypto, with dashboard to track your trading profits in real time, news feed on latest marke update, and reliable statistic on the top 100 coins.',
    link: 'https://mountain-crypto.vercel.app/',
    image: "/images/MountCrypto-demo.png",
    imgLeft: false,
    stack: ['React', 'Next', 'Tailwind', 'Chart.js']
  },
  {
    name1: 'Gym Beginner Gym -',
    name2: 'Fitness Centre',
    description: 'Go-to app to start your fitness journey! Learn the fundamental of workout planning and barbell exercises. Calculate your calorie and nutrition intake to meet your body goals, and easily find one of our gyms near you.',
    link: 'https://jasonchanhk.github.io/gymbeginnergym/#/home',
    image: "/images/Gym-demo.png",
    imgLeft: true,
    stack: ['React', 'Bootstrap', 'Rapid API', 'Google Map API']
  },
]

const ProjectContent = () => {
  return (
    <div className={`py-24 mx-auto max-w-7xl px-16 md:px-20`}>
      <div className='flex flex-col'>
        {
          projectItems.map(({ name1, name2, description, link, image, imgLeft, stack }, index) => {
            return (
              <div className={`flex text-black bg-white rounded-2xl p-4 mb-8 ${imgLeft && 'flex-row-reverse'}`} key={index} >
                <div className='flex-1'>
                  <div className='px-12 py-8'>
                    <div className='flex gap-2'>
                      {stack.map((tech, index) => {
                        return (
                          <div className='bg-lime-400 text-black px-4 py-2 rounded-full text-xs'>{tech}</div>
                        )
                      })}
                    </div>
                    <div className={`font-semibold text-3xl py-6 tracking-wider ${styles.titletext}`}>
                      {name1}
                      <br />
                      {name2}
                    </div>
                    <div className='text-md font-light pt-1 pb-4'>{description}</div>
                    <a href={`${link}`} target="_blank" rel="noreferrer" className={`${styles.titletext} flex items-center w-fit pt-4 font-semibold hover:text-gray-500`}>
                      View Website &gt;
                      </a>
                  </div>
                </div>
                <div className='flex-1 relative h-96 rounded-md shadow-lg cursor-pointer hover:shadow-gray-500'>
                  <a href={`${link}`} target="_blank" rel="noreferrer">
                    <Image
                      src={image}
                      alt={name1}
                      layout='fill'
                      objectFit="cover"
                      className='rounded-md' />
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectContent