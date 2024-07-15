import { PiArrowsLeftRightBold } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import LanguageDropdown from '../NavBar/LanguageDropdown/LanguageDropdown'
import Notification from './Notification/Notification'
import ProfileSettings from "./ProfileSettings/ProfileSettings";

const page = () => {
    return (
        <div className='flex items-center justify-between '>
            <div className="flex items-center">
                <PiArrowsLeftRightBold className="text-xl mr-2" />
                <p className="flex items-center text-base"><span className="font-medium">Dashboard</span> <span className="text-xl mx-1"><MdOutlineKeyboardArrowRight /></span>  Dashboard</p>
            </div>
            <div className="flex items-center gap-2">
                <LanguageDropdown />
                <Notification />
                <ProfileSettings/>
            </div>
        </div>
    )
}

export default page
