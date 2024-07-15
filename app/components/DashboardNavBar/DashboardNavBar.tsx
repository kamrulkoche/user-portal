import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiArrowsLeftRightBold } from "react-icons/pi";

import Menu from "../Menu/Menu";
import LanguageDropdown from '../NavBar/LanguageDropdown/LanguageDropdown';
import Notification from './Notification/Notification';
import ProfileSettings from "./ProfileSettings/ProfileSettings";

interface IProps {
    handleSidebar: (isOpen: boolean) => void;
}

const page = ({ handleSidebar }: IProps) => {

    return (
        <>
            <div className='sm:flex flex-row-reverse items-center justify-between '>
                <div className="flex items-center gap-2 justify-end ">
                    <LanguageDropdown />
                    <Notification />
                    <ProfileSettings />
                    <Menu handleSidebar={handleSidebar} />
                </div>
                <div className="flex items-center mt-3 ">
                    <PiArrowsLeftRightBold className="text-xl mr-2" />
                    <p className="flex items-center text-base"><span className="font-medium">Dashboard</span> <span className="text-xl mx-1"><MdOutlineKeyboardArrowRight /></span>  Dashboard</p>
                </div>
            </div>
        </>
    )
}

export default page
