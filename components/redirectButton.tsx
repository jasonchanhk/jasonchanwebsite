import { ReactNode } from 'react'
import { IoChevronForward } from 'react-icons/io5'

interface RedirectButtonProps {
    coloured: boolean;
    className?: string;
    children?: ReactNode;
}

const RedirectButton = ({ coloured, className, children }: RedirectButtonProps) => {
    return (
        <div className={`${coloured ? 'bg-gray-100' : 'bg-white'} flex items-center w-fit h-fit rounded-full ${className}`}>
            <div className={`${coloured ? 'bg-white text-black' : 'bg-lime-400 text-white'} w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center ml-2 mr-2 md:mr-4`}>
                <IoChevronForward />
            </div>
            <div className={`${coloured ? 'bg-lime-400 hover:bg-lime-500' : 'bg-indigo-600 hover:bg-indigo-700'} px-6 py-3 md:px-10 md:py-4 w-fit rounded-full text-white text-base md:text-lg`}>{children}</div>
        </div>
    )
};

export default RedirectButton;