import { MdOutlineNotificationsNone } from "react-icons/md";
import { GoDotFill } from "react-icons/go";


const Notification = () => {
    return (
        <div>
            <div className="relative">
                <button className=""><MdOutlineNotificationsNone className="text-[#723EEB] text-[2.5rem] border border-black rounded-lg p-1 hover:bg-[#723EEB] hover:text-white hover:border-white  duration-500 mt-1 relative" /></button>
                <div className="absolute top-3 right-2"><GoDotFill className="text-xs text-red-500  " /></div>
            </div>
        </div>
    )
}

export default Notification
