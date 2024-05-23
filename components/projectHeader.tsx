import RedirectButton from '../components/redirectButton'
import styles from '../styles/Home.module.css';

const ProjectHeader = () => {
    return(
        <div className={`md:top-24 ${styles.titletext} text-black relative h-36 w-full whitespace-nowrap overflow-x-hidden`}>
            <div className='absolute inset-0 font-extrabold text-8xl w-full z-0 text-lime-300 opacity-50'>
              Latest Pojects
            </div>
            <div className='absolute z-40 inset-0 flex justify-between mx-auto max-w-7xl px-16 md:px-20 text-white'>
              <div className='flex-col'>
                <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>03. </div>
                <div className='font-bold text-4xl md:text-6xl mt-2 tracking-wide z-40'>
                  My&nbsp;
                  <span className='text-indigo-600'>Latest Projects&nbsp;</span>
                </div>
              </div>
              <RedirectButton className='mt-10'>
                <a href="https://github.com/jasonchanhk" target="_blank" rel="noreferrer">View All Projects</a>
              </RedirectButton>
            </div>
          </div>
    )
}

export default ProjectHeader;