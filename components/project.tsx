export interface projectItemsProps {
    name: string;
    description: string;
    position: string;
    image?: string;
    link?: string
}

export const projectItems: Array<projectItemsProps> = [
    {
        name: 'MountCrypto',
        description: 'User dashboard displaying up-to-date statistic and news, built with React, Next, Tailwind CSS and Chart.js',
        position: 'md:self-end',
        link: 'https://mountain-crypto.vercel.app/',
        image: "/images/mountcrypto-demo-01.jpg"
    },
    {
        name: 'HK Bee Van United',
        description: 'Take delivery order and broadcast to drivers for matching, built with Node and Telegram Bot API ',
        position: 'md:self-center',
        link: 'https://t.me/HKBeeVanUtd_bot',
        image: "/images/BVan_demo-01.jpg"
    },
    {
        name: 'Gym Beginner Gym',
        description: 'Provide overall health knowledge for gym beginner, built with React, Bootstrap 5, Rapid API',
        position: 'md:self-start',
        link: 'https://jasonchanhk.github.io/gymbeginnergym/#/home',
        image: "/images/gbg-demo-01.jpg"
    },
]