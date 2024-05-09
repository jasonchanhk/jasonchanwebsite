import { IconContext } from "react-icons";
import { IoChevronForward } from 'react-icons/io5'

interface RedirectButtonProps {
    className: string
}

const RedirectButton = ({ className }: RedirectButtonProps) => {
    return (
        <div className={`bg-white flex items-center w-fit h-fit rounded-full z-40 ${className}`}>
            <div className='bg-lime-400 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer ml-2 mr-4'>
                <IconContext.Provider value={{ color: "rgb(255 251 235)", size: "1.5em", className: 'hover: text-amber-800' }}>
                    <IoChevronForward />
                </IconContext.Provider>
            </div>
            <div className='bg-indigo-600 px-10 py-4 w-fit rounded-full text-lime-400'>View All Projects</div>
        </div>
    )
};

export default RedirectButton;