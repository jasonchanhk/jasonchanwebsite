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
    stack: ['React', 'Bootstrap', 'Rapid API']
  },
]

const ProjectContent = () => {
  return (
    <div className={`py-12 md:py-24 mx-auto px-6 md:px-20 max-w-7xl`}>
      <div className='flex flex-col'>
        {
          projectItems.map(({ name1, name2, description, link, image, imgLeft, stack }, index) => {
            return (
              <div className={`flex flex-col md:flex-row text-black bg-white rounded-2xl p-4 mb-8 ${imgLeft && 'flex-row-reverse'}`} key={index} >
                <div className='md:flex-1'>
                  <div className='md:px-12 md:py-8'>
                    <div className='flex gap-2'>
                      {stack.map((tech, index) => {
                        return (
                          <div className='bg-lime-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-sm' key={index}>{tech}</div>
                        )
                      })}
                    </div>
                    <div className={`font-semibold text-xl md:text-3xl py-6 tracking-wider ${styles.titletext}`}>
                      {name1}
                      <br />
                      {name2}
                    </div>
                    <div className='text-sm md:text-md font-light pt-1 pb-4'>{description}</div>
                    <a href={`${link}`} target="_blank" rel="noreferrer" className={`${styles.titletext} flex items-center text-sm md:text-md w-fit pt-4 font-semibold hover:text-gray-500`}>
                      View Website &gt;
                      </a>
                  </div>
                </div>
                <div className='md:flex-1 relative h-52 md:h-96 rounded-md shadow-lg cursor-pointer hover:shadow-gray-500'>
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