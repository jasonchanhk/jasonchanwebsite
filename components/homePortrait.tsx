import Image from 'next/image'

const HomePortrait = () => {
    return(
        <div className='absolute z-20 inset-0 mx-auto flex justify-center items-end'>
        <Image
          src="/images/portrait-removebg-4.png"
          alt="Picture of the author"
          height={600}
          width={600}
          layout='fixed'
          objectFit="cover" />
      </div>
    )
}

export default HomePortrait;