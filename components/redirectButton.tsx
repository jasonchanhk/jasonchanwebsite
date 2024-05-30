import { ReactNode } from 'react'
import { IconContext } from "react-icons";
import { IoChevronForward } from 'react-icons/io5'

interface RedirectButtonProps {
    coloured: boolean;
    className?: string;
    children?: ReactNode;
}

const RedirectButton = ({ coloured, className, children }: RedirectButtonProps) => {
    return (
        <div className={`${coloured ? 'bg-gray-100' : 'bg-white'} flex items-center w-fit h-fit rounded-full ${className}`}>
            <div className={`${coloured ? 'bg-white' : 'bg-lime-400'} w-11 h-11 rounded-full flex items-center justify-center ml-2 mr-4`}>
                <IconContext.Provider value={{ color: `${coloured ? 'black' : 'white'}`, size: "1.5em" }}>
                    <IoChevronForward />
                </IconContext.Provider>
            </div>
            <div className={`${coloured ? 'bg-lime-400 hover:bg-lime-500' : 'bg-indigo-600 hover:bg-indigo-700'}  px-10 py-4 w-fit rounded-full text-white`}>{children}</div>
        </div>
    )
};

export default RedirectButton;