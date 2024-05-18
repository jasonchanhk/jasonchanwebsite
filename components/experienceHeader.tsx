import styles from '../styles/Home.module.css';

const ExperienceHeader = () => {
    return(
        <div className={`md:top-24 ${styles.titletext} text-black relative h-28 w-full whitespace-nowrap overflow-x-hidden`}>
        <div className='absolute inset-0 font-extrabold text-8xl w-full text-gray-100 z-0'>
          ducation & Work Experience My education
        </div>
        <div className='absolute z-40 inset-0 mx-auto flex justify-center'>
          <div className='flex-col'>
            <div className='font-semibold text-2xl underline tracking-wider underline-offset-8 z-40'>02. </div>
            <div className='font-bold text-3xl md:text-5xl mt-2 tracking-wide z-40'>
              My&nbsp;
              <span className='text-lime-400'>Education&nbsp;</span>
              &&nbsp;
              <span className='text-lime-400'>Work Experience </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ExperienceHeader